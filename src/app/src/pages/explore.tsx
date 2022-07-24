import Head from 'next/head'
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Wrap,
  WrapItem,
  Heading,
} from '@chakra-ui/react'

import {
  Container,
  Main,
  Footer,
  IntegrationCard,
  IntegrationProps,
} from '../components'

interface TabData {
  label: string
  content: string
}

function Integrations() {
  // 1. Create the component
  const DataTabs: React.FC<{ data: TabData[] }> = ({ data }) => {
    return (
      <Tabs isFitted>
        <TabList>
          {data.map((tab, index: number) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index: number) => (
            <TabPanel p={4} key={index}>
              {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}> */}
              <Wrap spacing={{ base: 5, lg: 8 }} justify="center">
                {defaultData
                  .filter((x) => x.categories.includes(tab.content))
                  .map((datum, index) => (
                    <WrapItem key={index}>
                      <IntegrationCard {...datum} />
                    </WrapItem>
                  ))}
              </Wrap>
              {/* </SimpleGrid> */}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  }

  // 2. Create an array of data
  const tabData: TabData[] = [
    {
      label: 'All',
      content: 'all',
    },
    {
      label: 'Learning',
      content: 'Learning',
    },
    {
      label: 'Health',
      content: 'Health',
    },
    {
      label: 'Events',
      content: 'Events',
    },
    {
      label: 'Media',
      content: 'Media',
    },
  ]

  // 3. Pass the props and chill!
  return <DataTabs data={tabData} />
}

const Explore = () => (
  <Container height="100vh">
    <Head>
      <title>Explore</title>
      <link rel="icon" type="image/x-icon" href="/vivacle_favicon.ico" />
    </Head>
    <Heading>Explore available providers</Heading>
    <Main>
      <Integrations />
    </Main>
    <Footer />
  </Container>
)

export default Explore

const defaultData: IntegrationProps[] = [
  {
    companyName: 'OxHack2022',
    categories: ['all', 'Events', 'Learning'],
    logoUrl: 'https://oxfordhack22.co.uk/logo512.png',
    description:
      'The official Oxford student Hackathon, where over 300 people gather every year to collaborate, innovate, learn and experiment while creating a project from scratch in 24 hours.',
    bgColor: 'blue.100',
    active: true,
    secondaryHref:
      'https://discord.com/api/oauth2/authorize?client_id=947364728399859732&redirect_uri=https%3A%2F%2Foxhack22.vercel.app%2Fdiscordlanding&response_type=code&scope=guilds',
  },
  {
    companyName: 'Spotify',
    categories: ['all', 'Media'],
    logoUrl:
      'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png',
    description:
      'A digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.',
    bgColor: 'green.100',
    active: true,
    secondaryName: 'spotify',
  },
  {
    companyName: 'Chainshot',
    categories: ['all', 'Learning'],
    logoUrl:
      'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/ChainShot_Logo/original.png?1615842691',
    description:
      'Fast-tracking your Ethereum developer career with 10-week instructor-led bootcamps.',
    bgColor: 'yellow.100',
    active: false,
    secondaryName: 'chainshot',
  },
  {
    companyName: 'Strava',
    categories: ['all', 'Health'],
    logoUrl: 'https://icon-library.com/images/strava-icon/strava-icon-10.jpg',
    description:
      'The #1 app for runners and cyclists. Our mission is to build the most engaged community of athletes in the world. Every day, we’re searching for new ways to inspire athletes and make the sports they love even more fun.',
    bgColor: 'orange.100',
    active: true,
    secondaryName: 'strava',
  },
  {
    companyName: 'Premier League',
    categories: ['all', 'Events'],
    logoUrl:
      'https://s3.amazonaws.com/premierleague-static-files/premierleague/pl_icon.png',
    description:
      'The top level of the English football league system. 20 clubs, 38 matches, world-class football.',
    bgColor: 'green.100',
    active: false,
    secondaryName: 'premierleague',
  },
  {
    companyName: 'Netflix',
    categories: ['all', 'Media'],
    logoUrl:
      'https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png',
    description:
      'At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV shows, movies and documentaries. ',
    bgColor: 'red.100',
    active: false,
    secondaryName: 'netflix',
  },
  {
    companyName: 'Audible',
    categories: ['all', 'Media'],
    logoUrl:
      'https://pbs.twimg.com/profile_images/1098979859446095873/TbBByTY3_400x400.png',
    bgColor: 'gray.100',
    active: false,
    description:
      'Audible is the leading creator and provider of premium audio storytelling, enriching the lives of our millions of listeners every day. ',
    secondaryName: 'audible',
  },
  {
    companyName: 'Duolingo',
    categories: ['all', 'Learning'],
    logoUrl: 'https://www.duolingo.com/images/facebook/duo200.png',
    description:
      'The world’s #1 way to learn a language. With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.',
    bgColor: 'green.100',
    active: false,
    secondaryName: 'duolingo',
  },
  {
    companyName: 'NBA',
    categories: ['all', 'Events'],
    logoUrl: 'http://nbahoopsonline.com/Articles/2016-17/nbaaplogo.jpg',
    description:
      'A professional basketball league comprised of 30 teams across North America featuring the best basketball players in the world.',
    bgColor: 'red.100',
    active: false,
    secondaryName: 'nba',
  },
  {
    companyName: 'Coursera',
    categories: ['all', 'Learning'],
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
    description:
      'Coursera partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. ',
    bgColor: 'blue.100',
    active: false,
    secondaryName: 'coursera',
  },
  {
    companyName: 'MapMyRun',
    categories: ['all', 'Health'],
    logoUrl:
      'https://play-lh.googleusercontent.com/AKJpG5oMquwDZEjCrDDamDlsKyRZ4jWi62pxFDaA9RstyoH1rik273n2EpRcqka56kw',
    description:
      "The best mobile run tracking experience, backed by the world's largest digital health and fitness community.",
    bgColor: 'blue.100',
    active: false,
    secondaryName: 'mapmyrun',
  },
  {
    companyName: 'Fitbit',
    categories: ['all', 'Health'],
    logoUrl:
      'https://media.glassdoor.com/sqll/500145/fitbit-squarelogo-1452064129606.png',
    description:
      'Meet the app that puts a world of health & fitness in your hands. From steps and distance to calories burned and active minutes, see your daily progress each day and over time. ',
    bgColor: 'green.100',
    active: false,
    secondaryName: 'fitbit',
  },
  {
    companyName: 'Udacity',
    categories: ['all', 'Learning'],
    logoUrl:
      'https://media.glassdoor.com/sqll/659776/udacity-squarelogo-1458083545831.png',
    description:
      'Udacity is where lifelong learners come to learn the skills they need, to land the jobs they want, to build the lives they deserve.',
    bgColor: 'blue.100',
    active: false,
    secondaryName: 'udacity',
  },
  {
    companyName: 'Apple Fitness',
    categories: ['all', 'Health'],
    logoUrl:
      'https://www.iphonejd.com/.a/6a010535fde333970c026be43261f5200d-pi',
    description: 'Track your fitness using a varity of Apple products.',
    bgColor: 'gray.100',
    active: false,
    secondaryName: 'applefitness',
  },
  {
    companyName: 'Peloton',
    categories: ['all', 'Health'],
    logoUrl:
      'https://play-lh.googleusercontent.com/wNmoGX3LqZUzZeCtvTm3jSAcwrvt9wRnjo5CYydSkiQOBf5IDNB8ndBkpRLVU6xpggX3',
    description:
      "Bringing immersive and challenging workouts into people's lives in a more accessible, affordable and efficient way.",
    bgColor: 'red.100',
    active: false,
    secondaryName: 'peloton',
  },
  {
    companyName: 'AllTrails',
    categories: ['all', 'Health'],
    logoUrl:
      'https://media.glassdoor.com/sqll/2311916/alltrails-squarelogo-1539895815445.png',
    description:
      "Built (for everyone) to go wild. Whether you want a casual stroll or a trek to the summit, we've got you covered.",
    bgColor: 'green.100',
    active: false,
    secondaryName: 'alltrails',
  },
]
