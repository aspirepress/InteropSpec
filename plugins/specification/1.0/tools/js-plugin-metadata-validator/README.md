# WordPress Plugin Metadata Validator (JavaScript)

JavaScript implementation of the WordPress Plugin Metadata Specification validator.

## Setup

From the root of the repository:

```bash
cd tools/validator/javascript
npm install
```

## Schema Files

The validator expects these schema files in your schema directory:
- `plugin.schema.json` (main schema)
- `plugin.banners.schema.json`
- `plugin.contributors.schema.json`
- `plugin.sections.schema.json`
- `plugin.source.schema.json`

## Usage

### Command Line

```bash
# Validate using default schema path (../../specification/1.0/schema)
node validate-plugin-data.js path/to/plugin.json

# Validate with custom schema path
node validate-plugin-data.js path/to/plugin.json path/to/schema/directory

# Examples
node validate-plugin-data.js ../../examples/minimal.json
node validate-plugin-data.js ../../examples/full.json
```

### Programmatic Usage

```javascript
const WPPluginMetadataValidator = require('./validate-plugin-data.js');

async function validatePlugin() {
    const validator = new WPPluginMetadataValidator('/path/to/schemas');
    await validator.loadSchemas();
    const result = await validator.validate('/path/to/plugin.json');
    
    if (result.valid) {
        console.log('Valid!');
    } else {
        console.log('Validation errors:', result.errors);
    }
}
```

### Exit Codes
- `0`: Validation successful
- `1`: Validation failed or error occurred

## Requirements

- Node.js >= 14
- npm

## Dependencies

```json
{
  "dependencies": {
    "ajv": "^8.12.0",
    "ajv-formats": "^2.1.1"
  }
}
```

## Directory Structure

```
js-plugin-metadata-validator/
├── validate-plugin-data.js  # Main validator script
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Error Messages

The validator provides detailed error messages:
```bash
❌ plugin.json is invalid:
- format: must match format "uri"
  at: /download_link
```

## Development

To run tests:
```bash
npm test
```

To check for schema file presence:
```bash
node validate-plugin-data.js --check-schemas
```

## Known Limitations

1. Requires all schema files to be in the same directory
2. Schema references must use local file paths during development
3. HTML content in strings is not deeply validated

## License

MIT - see LICENSE for details