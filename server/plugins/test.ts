export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        console.log('render:html', 'test')
    })

    nitroApp.hooks.hook('render:response', (response, { event }) => {
        console.log('render:response', 'response')
    })
})