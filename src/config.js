// config.js
module.exports = {
    github: {
        username: 'maryambagheri1989', // Your GitHub org/user name. (Required)
        sortBy: 'updated', // stars | updated
        limit: 4, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: ['laravel-ecommerce'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'maryam-bagheri-15623450',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://maryambagheri1989.github.io',
        phone: '',
        email: ''
    },
    skills: [
        'Java',
        'Research'
    ],
    experiences: [
        { 
            company: 'Soon',
            position: '...',
            from: '...',
            to: 'Present'
        },
        { 
            company: 'Soon',
            position: '...',
            from: '...',
            to: '...'
        }
    ],
    education: [
        { 
            institution: 'Sharif',
            degree: '...',
            from: '...',
            to: '...'
        },
        { 
            institution: 'Sharif',
            degree: '...',
            from: '...',
            to: '...',
        },
        { 
            institution: 'Sharif',
            degree: '...',
            from: '...',
            to: '...'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        //source: 'dev.to', // medium | dev.to
       // username: 'arifszn',
       // limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
       // id: 'G-WLLB5E14M6' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
       // id: '2617601', //  Please remove this and use your own id or keep it empty
       // snippetVersion : 6
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
