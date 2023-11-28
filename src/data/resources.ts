export interface Resource {
    title: string
    description: string
    url: string
    imageUrl?: string
    platform: ProjectPlatforms,
}

enum ProjectPlatforms {
    TelegramBot = "Telegram Bot",
    WebApp = "Web App",
}
export const resources: Resource[] = [
    // {
    //     title: "Sunnah Checklist",
    //     description: "Generate khatam plan around prayer times",
    //     url: "https://khatam-planner.jariyah.app",
    //     imageUrl: "approval.webp",
    //     platform: ProjectPlatforms.WebApp,
    // },
    {
        title: "Parents Guidebook",
        description: "Parents' guide with sunnah references",
        url: "https://t.me/khatam_challenge_bot",
        imageUrl: "reading.webp",
        platform: ProjectPlatforms.TelegramBot,
    },
    {
        title: "Read Aloud Video",
        description: "Parents' guide with sunnah references",
        url: "https://t.me/khatam_challenge_bot",
        imageUrl: "start.webp",
        platform: ProjectPlatforms.TelegramBot,
    },
    {
        title: "DIY Mealtime Reminder",
        description: "Parents' guide with sunnah references",
        url: "https://t.me/khatam_challenge_bot",
        imageUrl: "diploma-2.webp",
        platform: ProjectPlatforms.TelegramBot,
    },
    {
        title: "Colouring Printables",
        description: "Parents' guide with sunnah references",
        url: "https://t.me/khatam_challenge_bot",
        imageUrl: "diploma-2.webp",
        platform: ProjectPlatforms.TelegramBot,
    },
    {
        title: "Activity Sheets",
        description: "Parents' guide with sunnah references",
        url: "https://t.me/khatam_challenge_bot",
        imageUrl: "diploma-2.webp",
        platform: ProjectPlatforms.TelegramBot,
    },
    {
        title: "Share Your Feedback",
        description: "Grow your impact by contributing monthly",
        url: "https://impactbit.waktanjong.org/?ref=2802210542canva",
        imageUrl: "https://media.publit.io/file/projectassets/impactbit-logo.webp",
        platform: ProjectPlatforms.WebApp,
    }
]