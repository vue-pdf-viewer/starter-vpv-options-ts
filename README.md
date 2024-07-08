# VPV Starter Toolkit: Vue 3 + TypeScript + Options API

Welcome to the Vue PDF Viewer (VPV) starter toolkit! This repository provides a comprehensive guide on how to use VPV with Vue 3 and TypeScript via the Options API. This repo showcases how VPV can be integrated and rendered as part of a Vue.js project.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Installation

To get started, please clone this repo to your local machine and install the dependencies:

```bash
git clone https://github.com/your-username/starter-vpv-options-ts.git
cd starter-vpv-options-ts
npm install
```

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

    ```bash
    git clone https://github.com/your-username/starter-vpv-options-ts.git
    cd starter-vpv-options-ts
    ```

2. **Install Dependencies**: Install the necessary dependencies using npm or yarn

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

_Remark: For `pnpm`, there is a bit more configuration required which can be found (here)[]._

### Running the Example Project

This repo includes an example project to demonstrate how to use VPV. To run the example project:

1. **Serve the Application**: Use the following command to start the development server

    ```bash
    npm run serve
    # or
    yarn serve
    # or
    pnpm install
    # or
    bun install
    ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the example project in action

### Using the VPV Component

Once the example project is running, you may explore the source code to see how the VPV component is integrated. Here is a brief overview:

1. **Import the component**: Import the desired VPV component into your Vue file

    ```typescript
      <script lang="ts">
        import { defineComponent } from 'vue'
        import { VPdfViewer, type ToolbarOptions } from '@vpv/viewer';
        export default defineComponent({
          components: { VPdfViewer },
          data () {
            const toolbarOptions: Partial<ToolbarOptions> | false = false
            return {
              toolbarOptions,
              pdfSrc: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
            }
          }
        })
      </script>
    ```

2. **Use the component in the template**: Add the VPV component to your template section

    ```html
    <template>
      <div :style="{ width: '1028px', height: '700px'}">
        <VPdfViewer :src="pdfSource" :toolbar-options="toolbarOptions" />
      </div>
    </template>
    ```

## Examples

For more examples, please refer to the `src/App.vue` file in this repository:
 - Default Toolbar
 - Without Toolbar
 - Mobile View

_Remark: If you would like more examples, feel free to open an issue._

For more configurations, please check the [documentation](https://docs-vue-pdf-viewer.logicspark.com) site.

---

Thank you for using VPV! We hope this toolkit helps you build amazing Vue 3 applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
