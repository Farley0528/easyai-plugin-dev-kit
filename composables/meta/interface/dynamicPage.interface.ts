export const BuilderComponentGroupConst = {
    HomeTemplate: 'homeTemplate',
    Layout: 'layout',
    Base: 'base',
} as const

export type BuilderComponentGroupType =
    (typeof BuilderComponentGroupConst)[keyof typeof BuilderComponentGroupConst]
