# WordPress Plugin Metadata Specification - DRAFT - Version 1.0

## Contributors

- Anthony Burchell - individual contributor
- Eric Adams - individual contributor

## Status

Draft

## Dependencies

Written against the WordPress Plugin Directory standards.

## Overview

This specification allows for the standardization of metadata for WordPress plugins across multiple repositories. It aims to provide a consistent format for plugin information, making it easier for developers, users, and platforms to work with plugin data.

### Example

```json
{
	"name": "XR Publisher",
	"slug": "xr-publisher",
	"version": "2.0.0",
	"author": "antpb",
	"author_profile": "https://profiles.wordpress.org/antpb/",
	"requires": "5.0",
	"tested": "6.7",
	"requires_php": "7.2",
	"requires_plugins": [],
	"compatibility": [],
	"rating": 0,
	"ratings": {
	  "1": 0,
	  "2": 0,
	  "3": 0,
	  "4": 0,
	  "5": 0
	},
	"num_ratings": 0,
	"support_threads": 0,
	"support_threads_resolved": 0,
	"active_installs": 50,
	"downloaded": 0,
	"last_updated": "2024-10-09 12:00pm GMT",
	"added": "2024-10-09",
	"homepage": "https://xrpublisher.com/",
	"sections": {
	  "description": "A WordPress plugin for publishing XR content with support for WebXR and popular glTF Extensions.",
	  "installation": "",
	  "changelog": "",
	  "faq": "",
	  "screenshots": ""
	},
	"short_description": "A WordPress plugin for drag and drop 3D content creation compatible with most XR devices.",
	"description": "A WordPress plugin for publishing XR content with support for WebXR and popular glTF Extensions.",
	"download_link": "https://updater.sxp.digital/xr-publisher.zip",
	"screenshots": [],
	"tags": {
	  "tag1": "metaverse",
	  "tag2": "virtual reality"
	},
	"versions": {
	  "2.0-alpha": "https://updater.sxp.digital/xr-publisher.zip"
	},
	"donate_link": "https://xrpublisher.com",
	"contributors": {
	  "antpb": {
		"profile": "https://profiles.wordpress.org/antpb/",
		"avatar": "https://secure.gravatar.com/avatar/youravatarhash?s=96&d=monsterid&r=g",
		"display_name": "antpb"
	  }
	},
	"icons": {
	  "1x": "https://updater.sxp.digital/xr-publisher/icon-128x128.png",
	  "2x": "https://updater.sxp.digital/xr-publisher/icon-256x256.png"
	},
	"source": {
	  "name": "SXP Digital",
	  "url": "https://updater.sxp.digital"
	},
	"business_model": "commercial",
	"commercial_support_url": "https://xrpublisher.com/support",
	"support_url": "https://xrpublisher.com/community",
	"preview_link": "https://xrpublisher.com/demo",
	"repository_url": "https://github.com/antpb/xr-publisher",
	"spec_meta": {
		"specification-version": "1.0",
		"specification-source": "aspiprepress"
	  }  
  }
```

## WordPress Plugin Metadata Schema

This specification consists of a JSON schema that defines the structure and properties of WordPress plugin metadata. The schema is designed to be comprehensive, covering various aspects of plugin information that are relevant to developers, users, and platforms.

### Property Summary

| Property                 | Type    | Description                                                   | Required |
|--------------------------|---------|---------------------------------------------------------------|----------|
| name                     | string  | The name of the plugin                                        | Yes |
| slug                     | string  | The unique identifier for the plugin                          | Yes |
| version                  | string  | The current version of the plugin                             | Yes |
| author                   | string  | The plugin author's name                                      | Yes |
| author_profile           | string  | URL to the author's profile                                   | No |
| requires                 | string  | Minimum required WordPress version                            | Yes |
| tested                   | string  | Highest WordPress version the plugin has been tested with     | Yes |
| requires_php             | string  | Minimum required PHP version                                  | Yes |
| requires_plugins         | string  | A list of slugs as required plugins alongside this plugin     | Yes |
| rating                   | number  | Average user rating (0-100)                                   | No |
| num_ratings              | integer | Number of user ratings                                        | No |
| support_threads          | integer | Number of support threads                                     | No |
| support_threads_resolved | integer | Number of resolved support threads                            | No |
| active_installs          | integer | Number of active installations                                | No |
| downloaded               | integer | Total number of downloads                                     | No |
| last_updated             | string  | Date and time of last update (ISO 8601 format)                | Yes |
| added                    | string  | Date the plugin was added to the repository (ISO 8601 format) | Yes |
| homepage                 | string  | URL of the plugin's homepage                                  | No |
| short_description        | string  | Brief description of the plugin                               | Yes |
| description              | string  | Full description of the plugin (may include HTML)             | Yes |
| download_link            | string  | URL to download the plugin                                    | Yes |
| banners                  | object  | URL of the plugin's banner image                              | No |
| tags                     | object  | Key-value pairs of tags associated with the plugin            | No |
| donate_link              | string  | URL for plugin donations                                      | No |
| contributors             | object  | Object containing contributor information                     | No |
| icons                    | object  | URLs for plugin icons at different sizes                      | No |
| source                   | object  | Information about the source of the plugin                    | No |
| business_model           | string  | Information about the source of the plugin                    | No |
| commercial_support_url   | string  | URL of commercial support information                         | No |
| support_url              | string  | URL of community support information                          | No |
| preview_link             | string  | URL for live preview of plugin                                | No |
| repository_url           | string  | URL for the source code respository of the plugin             | No |
| tested                   | string  | Most recent version of wordpress tested against               | No |
| upgrade_notice           | object  | Release status for recent versions                            | No |
| versions                 | object  | Download URLs for recent versions                             | No |
| spec_meta                | object  | The specification metadata                                    | No |

## Property Details

### versions
- **Type**: string
- **Required**: Yes
- **Description**: Download URLs for recent versions
- **Example**: `{"1.0.0": "https://example.com/plugin1.0.0.zip", "1.0.1": "https://example.com/plugin1.0.1.zip"}`

### upgrade_notice
- **Type**: string
- **Required**: Yes
- **Description**: Release status for recent versions
- **Example**: `{"1.0.0": "First Stable Release", "1.0.1": "Stable Release"}`

### tested
- **Type**: string
- **Required**: Yes
- **Description**: Most recent version of wordpress tested against
- **Example**: `"6.6.2"`

### commercial_support_url
- **Type**: string
- **Required**: Yes
- **Description**: URL of commercial support information
- **Example**: `"https://example.com/support"`

### support_url
- **Type**: string
- **Required**: Yes
- **Description**: URL of community support information
- **Example**: `"https://example.com/support"`

### name
- **Type**: string
- **Required**: Yes
- **Description**: The full name of the plugin as it appears in the WordPress plugin directory. This should be a human-readable name that clearly identifies the plugin.
- **Example**: `"XR Publisher"`

### slug
- **Type**: string
- **Required**: Yes
- **Description**: A unique identifier for the plugin, typically used in URLs and file names. It should be lowercase and use hyphens instead of spaces.
- **Example**: `"xr-publisher"`

### version
- **Type**: string
- **Required**: Yes
- **Description**: The current version number of the plugin. It should follow semantic versioning (e.g., MAJOR.MINOR.PATCH).
- **Example**: `"2.0-alpha"`

### author
- **Type**: string
- **Required**: Yes
- **Description**: The name or username of the plugin's primary author.
- **Example**: `"antpb"`

### author_profile
- **Type**: string
- **Required**: No
- **Description**: URL to the author's profile page.
- **Example**: `"https://antpb.com/"`

### requires
- **Type**: string
- **Required**: Yes
- **Description**: The minimum WordPress version required to use this plugin. Null state is boolean false.
- **Example**: `"5.0"`

### tested
- **Type**: string
- **Required**: Yes
- **Description**: The highest WordPress version the plugin has been tested with and confirmed to work.
- **Example**: `"6.7"`

### requires_php
- **Type**: string
- **Required**: Yes
- **Description**: The minimum PHP version required to use this plugin. Null state is boolean false.
- **Example**: `"7.2"`

### rating
- **Type**: number
- **Required**: No
- **Description**: The average user rating for the plugin, on a scale from 0 to 100. This is divided by 20 before display in the UI.
- **Example**: `95`

### ratings
- **Type**: object
- **Required**: No
- **Description**: The average user rating for the plugin, on a scale from 0 to 100. This is divided by 20 before display in the UI.
- **Example**: `95`

### num_ratings
- **Type**: integer
- **Required**: No
- **Description**: The total number of user ratings the plugin has received.
- **Example**: `42`

### support_threads
- **Type**: integer
- **Required**: No
- **Description**: The number of open support threads for the plugin.
- **Example**: `3`

### support_threads_resolved
- **Type**: integer
- **Required**: No
- **Description**: The number of resolved support threads for the plugin.
- **Example**: `27`

### active_installs
- **Type**: integer
- **Required**: No
- **Description**: An estimate of the number of active installations of the plugin.
- **Example**: `50`

### downloaded
- **Type**: integer
- **Required**: No
- **Description**: The total number of times the plugin has been downloaded.
- **Example**: `1000`

### last_updated
- **Type**: string
- **Required**: Yes
- **Description**: The date and time when the plugin was last updated, in ISO 8601 format.
- **Example**: `"2024-10-09T12:00:00Z"`

### added
- **Type**: string
- **Required**: Yes
- **Description**: The date when the plugin was first added to the repository, in ISO 8601 format.
- **Example**: `"2024-10-09"`

### homepage
- **Type**: string
- **Required**: No
- **Description**: The URL of the plugin's homepage or documentation site.
- **Example**: `"https://xrpublisher.com/"`

### short_description
- **Type**: string
- **Required**: Yes
- **Description**: A brief, one-sentence description of the plugin's purpose and main features.
- **Example**: `"A WordPress plugin for drag and drop 3D content creation compatible with all XR devices."`

### description
- **Type**: string
- **Required**: Yes
- **Description**: A full description of the plugin, its features, and usage. May include HTML for formatting.
- **Example**: `"<p>A WordPress plugin for drag and drop 3D content creation compatible with most XR devices.</p>..."`

### download_link
- **Type**: string
- **Required**: Yes
- **Description**: The URL where the plugin can be downloaded from.
- **Example**: `"https://plugins.sxp.digital/e188bdf1-1cad-4a40-b8d8-fa2a354beea0/xr-publisher/xr-publisher.zip"`

### banners
- **Type**: object or empty array
- **Required**: No
- **Description**: The URL of the plugin's banner image, typically used in the plugin directory. Valid values contain "high" and "low" keys, each which can contain a url or "false" as values. Null state is represented as an empty array.
- **Example**: `{"high": "https://plugins.sxp.digital/e188bdf1-1cad-4a40-b8d8-fa2a354beea0/xr-publisher/banner-1500x620.jpg", "low": false }`

### tags
- **Type**: object
- **Required**: No
- **Description**: An object containing key-value pairs of tags associated with the plugin. These help in categorization and searching.
- **Example**: `{"tag1": "metaverse", "tag2": "virtual reality"}`

### donate_link
- **Type**: string
- **Required**: No
- **Description**: A URL where users can make donations to support the plugin's development.
- **Example**: `"https://xrpublisher.com"`

### contributors
- **Type**: object
- **Required**: No
- **Description**: An object containing information about the plugin's contributors. Each key is a contributor's username, and the value is an object with their details.
- **Example**:
  ```json
  {
    "yourname": {
      "profile": "https://antpb.com",
      "avatar": "https://secure.gravatar.com/avatar/776698fe960d9857689e2fc729f8a3bd7293f2baf2b1c569",
      "display_name": "antpb"
    }
  }
  ```

### icons
- **Type**: object
- **Required**: No
- **Description**: An object containing URLs for the plugin's icons at different sizes. The keys represent the icon size (e.g., "1x", "2x"), and the values are the URLs.
- **Example**:
  ```json
  {
    "1x": "https://plugins.sxp.digital/e188bdf1-1cad-4a40-b8d8-fa2a354beea0/xr-publisher/icon-256x256.jpg",
    "2x": "https://plugins.sxp.digital/e188bdf1-1cad-4a40-b8d8-fa2a354beea0/xr-publisher/icon-256x256.jpg"
  }
  ```

### source
- **Type**: object
- **Required**: No
- **Description**: Information about the source of the plugin metadata, including the name of the source and its URL.
- **Example**:
  ```json
  {
    "name": "SXP Digital",
    "url": "https://plugins.sxp.digital"
  }
  ```
  
### business_model
- **Type**: string or false
- **Required**: No
- **Description**: One of "commercial", "community", or the boolean value false.
- **Example**: `"community"`
### preview_link
- **Type**: string
- **Required**: No
- **Description**: Link to preview install of plugin
- **Example**: `"https://wordpress.org/plugins/ultrablocks/?preview=1"`

### repository_url
- **Type**: string
- **Required**: No
- **Description**: Link to the source code repository of the plugin
- **Example**: `"https://github.com/10up/ads-txt"`

### requires_plugins
- **Type**: list
- **Required**: No
- **Description**: A list of strings of plugin slugs to satisfy the requirements for this plugin
- **Example**: `["woocommerce"]`

### screenshots
- **Type**: object
- **Required**: No
- **Description**: An object enumerating screenshots for the plugin. Outer dict keys are integers. Inner dict keys are `src` and `caption`. Null state in an empty array.
- **Example**: `{"1": {"src": "http://example.com/example.png", "caption": "Shipping Rules Screen"}}`

### sections
- **Type**: object
- **Required**: No
- **Description**: An object containing numerous HTML strings. The only valid items are `screenshots`, `changelog`, `faq`, `reviews`, `description`, and `installation`. No sections are required.
- **Example**: `{"faq": "<h3>How do I ask a question?</h3>"}`




## Using the WordPress Plugin Metadata Specification

Repositories and platforms that host WordPress plugins should implement this specification to provide consistent metadata for plugins. This metadata can be used for displaying plugin information, searching and filtering plugins, and integrating with various tools and services.

## JSON Schema

FULL SCHEMA DOCS IN THE WORKS - let's get the draft done first then I can write proper schema docs like in: https://github.com/omigroup/gltf-extensions/tree/main/extensions/2.0/KHR_audio_emitter/schema

## Known Implementations

### 3D Plugin Repo Proof of concept

- [3D Plugin Repo:](https://app.xr.foundation/)
- [Demo:](https://www.youtube.com/watch?v=1oTkmDNkwyo/)

## Resources

Modeled after the Khronos Group glTF Extension specification structure.

Initial version inspired by [the WordPress.org plugin schema:](https://api.wordpress.org/translations/plugins/1.0/?slug=three-object-viewer/)
