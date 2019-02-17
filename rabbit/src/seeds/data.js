let data = (function () {
    function generateVoteCount() {
        return Math.floor((Math.random() * 50) + 15);
    }

    const products = [
        {
            id: 1,
            title: 'Stripe',
            description: 'Payment integration and management.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/daniel.jpg',
            productImageUrl: 'https://bit.ly/2Ee7k6m',
        },
        {
            id: 2,
            title: 'Cards',
            description: 'Send an online postcard to your loved one.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/kristy.png',
            productImageUrl: 'https://bit.ly/2TSNvXU',
        },
        {
            id: 3,
            title: 'Lunar Way',
            description: 'An easy way to handle your personal finance.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/veronika.jpg',
            productImageUrl: 'https://bit.ly/2tpvvIU',
        },
        {
            id: 4,
            title: 'The Spoke',
            description: 'Instantly discover and decide what to do next.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/molly.png',
            productImageUrl: 'https://bit.ly/2EeNt7l',
        },
    ];

    return { products: products };
}());

export default data;
