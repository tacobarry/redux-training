export default props => {
    if(props.show) {
        return props.children
    } else {
        return false
    }
}
