
export const getColor = (type) => {
    switch (type) {
        case 'figthting':
            return {background: 'linear-gradient(to top, #c85332, #ac432e)', color: '#ac432e'}
        case 'flying':
            return {background: 'linear-gradient(to top, #b2c075, #dbf176)', color: '#dbf176'}
        case 'poison':
            return {background: 'linear-gradient(to top, #af7be3, #673b95)', color: '#673b95'}
        case 'ground':
            return {background: 'linear-gradient(to top, #ad7a1b, #7c5814)', color: '#7c5814'}
        case 'rock':
            return {background: 'linear-gradient(to top, #979797, #444444)', color: '#444444'}
        case 'bug':
            return {background: 'linear-gradient(to top, #e2e2e2, #6eb14f)', color: '#6eb14f'}
        case 'ghost':
        case 'steel':
            return {background: 'linear-gradient(to top, #3d3c88, #18175f)', color: '#18175f'}
        case 'fire':
            return {background: 'linear-gradient(to top, #fcb354, #ef5e3f)', color: '#ef5e3f'}
        case 'water':
            return {background: 'linear-gradient(to top, #93d1e0, #009fc7)', color: '#009fc7'}
        case 'grass':
            return {background: 'linear-gradient(to top, #e2e2e2, #78da51)', color: '#bcda51'}
        case 'electric':
            return {background: 'linear-gradient(to top, #6d5900, #e8ec01)', color: '#d4d800'}
        case 'psychic':
            return {background: 'linear-gradient(to top, #3b127e, #6c127e)', color: '#6c127e'}
        case 'ice':
            return {background: 'linear-gradient(to top, #3dddba, #1b62b3)', color: '#1b62b3'}
        case 'dragon':
            return {background: 'linear-gradient(to top, #90d339, #ebd728)', color: '#ebd728'}
        case 'dark':
            return {background: 'linear-gradient(to top, #240000, #000333)', color: '#000333'}
        case 'fairy':
            return {background: 'linear-gradient(to top, #2b60a5, #c76ff0)', color: '#c76ff0'}
        case 'unknown':
            return {background: 'linear-gradient(to top, #240000, #000333)', color: '#000333'}
        default:
            return {background: 'linear-gradient(to top, #e5eebe, #c4e438)', color: '#dbf176'}
    }
}