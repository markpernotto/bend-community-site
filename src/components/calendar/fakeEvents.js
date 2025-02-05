const now = new Date()

export default [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2019, 9, 0),
        end: new Date(2019, 9, 1),
        resourceId: 1,
        class: 'BendJS',
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2019, 9, 7),
        end: new Date(2019, 9, 10),
        resourceId: 1,
        class: 'BendJS',
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2019, 9, 13, 0, 0, 0),
        end: new Date(2019, 9, 20, 0, 0, 0),
        resourceId: 1,
        class: 'BendJS',
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2019, 10, 6, 0, 0, 0),
        end: new Date(2019, 10, 13, 0, 0, 0),
        resourceId: 1,
        class: 'BendJS',
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2019, 9, 9, 0, 0, 0),
        end: new Date(2019, 9, 10, 0, 0, 0),
        resourceId: 2,
        class: 'AWS',
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2019, 9, 11),
        end: new Date(2019, 9, 13),
        desc: 'Big conference for important people',
        resourceId: 2,
        class: 'AWS',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2019, 9, 12, 10, 30, 0, 0),
        end: new Date(2019, 9, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
        resourceId: 2,
        class: 'AWS',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2019, 9, 12, 12, 0, 0, 0),
        end: new Date(2019, 9, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
        resourceId: 2,
        class: 'AWS',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2019, 9, 12, 14, 0, 0, 0),
        end: new Date(2019, 9, 12, 15, 0, 0, 0),
        resourceId: 3,
        class: 'AWS',
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2019, 9, 12, 17, 0, 0, 0),
        end: new Date(2019, 9, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
        resourceId: 3,
        class: 'AWS',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2019, 9, 12, 20, 0, 0, 0),
        end: new Date(2019, 9, 12, 21, 0, 0, 0),
        resourceId: 4,
        class: 'AWS',
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2019, 9, 13, 7, 0, 0),
        end: new Date(2019, 9, 13, 10, 30, 0),
        resourceId: 4,
        class: 'AWS',
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2019, 9, 17, 19, 30, 0),
        end: new Date(2019, 9, 18, 2, 0, 0),
        resourceId: 4,
        class: 'AWS',
    },
    {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2019, 9, 17, 19, 30, 0),
        end: new Date(2019, 9, 17, 23, 30, 0),
        resourceId: 4,
        class: 'AWS',
    },
    {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2019, 9, 20, 19, 30, 0),
        end: new Date(2019, 9, 22, 2, 0, 0),
        resourceId: 2,
        class: 'AWS',
    },
    {
        id: 14,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
        resourceId: 4,
        class: 'AWS',
    },
    {
        id: 15,
        title: 'Point in Time Event',
        start: now,
        end: now,
        resourceId: 4,
        class: 'WordPress',
    },
    {
        id: 16,
        title: 'Video Record',
        start: new Date(2019, 9, 14, 15, 30, 0),
        end: new Date(2019, 9, 14, 19, 0, 0),
        resourceId: 4,
        class: 'WordPress',
    },
    {
        id: 17,
        title: 'Dutch Song Producing',
        start: new Date(2019, 9, 14, 16, 30, 0),
        end: new Date(2019, 9, 14, 20, 0, 0),
        resourceId: 4,
        class: 'WordPress',
    },
    {
        id: 18,
        title: 'Itaewon Halloween Meeting',
        start: new Date(2019, 9, 14, 16, 30, 0),
        end: new Date(2019, 9, 14, 17, 30, 0),
        resourceId: 4,
        class: 'WordPress',
    },
    {
        id: 19,
        title: 'Online Coding Test',
        start: new Date(2019, 9, 14, 17, 30, 0),
        end: new Date(2019, 9, 14, 20, 30, 0),
        resourceId: 3,
        class: 'BendTech',
    },
    {
        id: 20,
        title: 'An overlapped Event',
        start: new Date(2019, 9, 14, 17, 0, 0),
        end: new Date(2019, 9, 14, 18, 30, 0),
        resourceId: 2,
        class: 'BendTech',
    },
    {
        id: 21,
        title: 'Phone Interview',
        start: new Date(2019, 9, 14, 17, 0, 0),
        end: new Date(2019, 9, 14, 18, 30, 0),
        resourceId: 2,
        class: 'BendTech',
    },
    {
        id: 22,
        title: 'Cooking Class',
        start: new Date(2019, 9, 14, 17, 30, 0),
        end: new Date(2019, 9, 14, 19, 0, 0),
        resourceId: 2,
        class: 'BendTech',
    },
    {
        id: 23,
        title: 'Go to the gym',
        start: new Date(2019, 10, 14, 18, 30, 0),
        end: new Date(2019, 10, 14, 20, 0, 0),
        resourceId: 1,
        class: 'BendTech',
    },
]