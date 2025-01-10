
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "svelte": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild__svelte__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "svelte": {
            name: "svelte",
            version: "5.14.4",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["svelte"].loaded = true
              const {"svelte": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^5.0.0"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      