// tools/validator/javascript/validate.js
const Ajv = require('ajv/dist/2020');
const addFormats = require('ajv-formats');
const fs = require('fs').promises;
const path = require('path');

class WPPluginMetadataValidator {
    constructor(schemaPath) {
        this.ajv = new Ajv({
            allErrors: true,
            verbose: true,
            strict: false,
            validateFormats: true,
            allowUnionTypes: true
        });
        addFormats(this.ajv);
        this.schemaPath = schemaPath;
    }

    async loadSchemas() {
        try {
            // Load all schema files from the directory
            const schemaFiles = [
                'plugin.schema.json',
                'plugin.banners.schema.json',
                'plugin.contributors.schema.json',
                'plugin.sections.schema.json',
                'plugin.source.schema.json'
            ];

            // Load each schema file
            for (const filename of schemaFiles) {
                const filepath = path.join(this.schemaPath, filename);
                console.log(`Loading schema: ${filepath}`);
                
                try {
                    const content = await fs.readFile(filepath, 'utf8');
                    const schema = JSON.parse(content);
                    // Use the filename as the schema ID for local references
                    schema.$id = filename;
                    this.ajv.addSchema(schema);
                } catch (err) {
                    console.warn(`Warning: Could not load schema ${filename}:`, err.message);
                }
            }

            // Get the main schema
            const mainSchema = this.ajv.getSchema('plugin.schema.json');
            if (!mainSchema) {
                throw new Error('Main schema could not be loaded');
            }

        } catch (error) {
            console.error('Schema loading error:', error.message);
            throw error;
        }
    }

    async validate(jsonFile) {
        try {
            const data = JSON.parse(
                await fs.readFile(jsonFile, 'utf8')
            );

            const validate = this.ajv.getSchema('plugin.schema.json');
            if (!validate) {
                throw new Error('Plugin schema not loaded. Did you call loadSchemas()?');
            }

            const valid = validate(data);

            return {
                valid,
                errors: validate.errors ? validate.errors.map(err => ({
                    path: err.instancePath,
                    keyword: err.keyword,
                    message: err.message,
                    params: err.params
                })) : null
            };
        } catch (error) {
            if (error instanceof SyntaxError) {
                return {
                    valid: false,
                    errors: [{
                        path: '',
                        keyword: 'parse',
                        message: 'Invalid JSON: ' + error.message
                    }]
                };
            }
            throw error;
        }
    }

    printResult(result, filename) {
        if (result.valid) {
            console.log(`✅ ${filename} is valid`);
        } else {
            console.log(`❌ ${filename} is invalid:`);
            result.errors.forEach(error => {
                const location = error.path || 'root';
                console.log(`- ${error.keyword}: ${error.message}`);
                console.log(`  at: ${location}`);
                if (error.params && Object.keys(error.params).length > 0) {
                    console.log(`  details:`, error.params);
                }
            });
        }
    }
}

// CLI usage
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.log('Usage: node validate.js <json-file> [schema-path]');
        process.exit(1);
    }

    const jsonFile = args[0];
    const schemaPath = args[1] || path.join(__dirname, '../../../../specification/1.0/schema');

    (async () => {
        try {
            const validator = new WPPluginMetadataValidator(schemaPath);
            await validator.loadSchemas();
            const result = await validator.validate(jsonFile);
            validator.printResult(result, jsonFile);
            process.exit(result.valid ? 0 : 1);
        } catch (error) {
            console.error('Fatal error:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = WPPluginMetadataValidator;