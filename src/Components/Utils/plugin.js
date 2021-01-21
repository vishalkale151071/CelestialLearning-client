export function callPlugin(code){
    window.open(
        `cellearn://localhost:5000/start?t=${code}`,
        '_blank'
    )
}