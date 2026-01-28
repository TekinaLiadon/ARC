module.exports = {
    apps: [
        {
            name: 'ARC',
            exec_mode: 'cluster',
            instances: 'max',
            script: 'npm run start',
            args: 'start'
        }
    ]
}