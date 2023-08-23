import { jest } from '@jest/globals'

export const print = jest.fn().mockImplementation(()=>{
    console.log('test')
})
