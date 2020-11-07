import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { default as Card } from './card'

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        photo: { control: 'text' },
        title: { control: 'text' },
        quote: { control: 'text' }
    }
}

const Template = (args) => {
    const props = {
        card: {
            photo: {url: args.photo},
            title: [{text: args.title}],
            quote: [{text: args.quote}]
        }
    }
    return <Card {...props} />
}

export const Default = Template.bind({});
Default.args = {
    photo: "public/images/6b2bf485-aa12-44ef-8f06-dce6b91b9309_dancing.png",
    title: 'One',
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
};
