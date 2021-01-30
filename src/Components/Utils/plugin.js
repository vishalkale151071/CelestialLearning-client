export function callPlugin(code){
    window.open(
        `celestial://localhost:5000/start?t=${code}`,
        '_blank'
    )
}