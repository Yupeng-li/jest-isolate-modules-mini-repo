import { beforeEach, expect, it, jest } from '@jest/globals'
import * as exportsFromIndexFile from "./index";
import {range} from 'lodash'
import { print } from './print'

jest.mock('./print') // this seems to make the difference between two scenarios

let indexModule : typeof exportsFromIndexFile

beforeEach(()=>{
    jest.isolateModules(()=>{
        indexModule = require('./index')
    })
})

it('mocks for a library in node_modules are not working', () => {
    indexModule.helloWorld()
    expect(range).toHaveBeenCalled()
});

it('mocks for my own module works', () => {
    indexModule.helloWorld()
    expect(print).toHaveBeenCalled()
})
