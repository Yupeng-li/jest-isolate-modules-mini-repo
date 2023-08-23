import {range} from 'lodash'
import {print} from './print'

export const helloWorld = ()=>{
    range(20).forEach(value=>{
        print(`${value}`)
    })
}
