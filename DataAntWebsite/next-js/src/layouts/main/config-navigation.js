import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  // {
  //   order: '1',
  //   subheader: 'learning',
  //   cover: '/assets/images/menu/menu_elearning.jpg',
  //   items: [
  //     { title: 'Landing', path: paths.learning.root },
  //     { title: 'Courses', path: paths.learning.courses },
  //     { title: 'Course', path: paths.learning.course },
  //     { title: 'Blog Posts', path: paths.learning.posts },
  //     { title: 'Blog Post', path: paths.learning.post },
  //     { title: 'About', path: paths.learning.about },
  //     { title: 'Contact', path: paths.learning.contact },
  //   ],
  // },
  // {
  //   order: '7',
  //   subheader: 'Marketing',
  //   cover: '/assets/images/menu/menu_marketing.jpg',
  //   items: [
  //     { title: 'Landing', path: paths.marketing.root },
  //     { title: 'Services', path: paths.marketing.services },
  //     { title: 'Case Studies', path: paths.marketing.caseStudies },
  //     { title: 'Case Study', path: paths.marketing.caseStudy },
  //     { title: 'Blog Posts', path: paths.marketing.posts },
  //     { title: 'Blog Post', path: paths.marketing.post },
  //     { title: 'About', path: paths.marketing.about },
  //     { title: 'Contact', path: paths.marketing.contact },
  //   ],
  // },
  // {
  //   order: '6',
  //   subheader: 'Travel',
  //   cover: '/assets/images/menu/menu_travel.jpg',
  //   items: [
  //     { title: 'Landing', path: paths.travel.root },
  //     { title: 'Tours', path: paths.travel.tours },
  //     { title: 'Tour', path: paths.travel.tour },
  //     { title: 'Checkout', path: paths.travel.checkout },
  //     { title: 'Order Completed', path: paths.travel.orderCompleted },
  //     { title: 'Blog Posts', path: paths.travel.posts },
  //     { title: 'Blog Post', path: paths.travel.post },
  //     { title: 'About', path: paths.travel.about },
  //     { title: 'Contact', path: paths.travel.contact },
  //   ],
  // },
  // {
  //   order: '2',
  //   subheader: 'Career',
  //   cover: '/assets/images/menu/menu_career.jpg',
  //   items: [
  //     { title: 'Landing', path: paths.career.root },
  //     { title: 'Jobs', path: paths.career.jobs },
  //     { title: 'Job', path: paths.career.job },
  //     { title: 'Blog Posts', path: paths.career.posts },
  //     { title: 'Blog Post', path: paths.career.post },
  //     { title: 'About', path: paths.career.about },
  //     { title: 'Contact', path: paths.career.contact },
  //   ],
  // },
  // {
  //   order: '1',
  //   subheader: 'e-learning',
  //   cover: '/assets/images/menu/menu_elearning.jpg',
  //   items: [
  //     { title: 'Courses', path: paths.eLearning.courses },
  //     { title: 'Course', path: paths.eLearning.course },
  //     { title: 'About', path: paths.eLearning.about },
  //     { title: 'Contact', path: paths.eLearning.contact },
  //   ],
  // },
  {
    order: '2',
    subheader: 'Introduction Level',
    cover: '/assets/images/course/course_3.jpg',
    items: [
      { title: 'Introduction to Python', path: paths.eLearning.course },
      { title: 'Introduction to Robotics', path: paths.eLearning.course }
    ],
  },
  {
    order: '3',
    subheader: 'Intermediate Level',
    cover: '/assets/images/course/course_1.jpg',
    items: [
      { title: 'Machine Learning', path: paths.eLearning.course },
      { title: 'Reinforcement Learning', path: paths.eLearning.course },
      { title: 'Deep Learning', path: paths.eLearning.course },
      { title: 'Generative AI', path: paths.eLearning.course },
    ],
  },
  {
    order: '4',
    subheader: 'Advanced Level',
    cover: '/assets/images/course/course_2.jpg',
    items: [
      { title: 'Machine Learning', path: paths.eLearning.course },
      { title: 'Reinforcement Learning', path: paths.eLearning.course },
      { title: 'Deep Learning', path: paths.eLearning.course },
      { title: 'Generative AI', path: paths.eLearning.course },
    ],
  },

  {
    isNew: true,
    order: '5',
    subheader: 'Ongoing Projects',
    cover: '/assets/images/projectDemo/RobotQuadruped.png',
    items: [
      { title: 'Enbody Quadruped Robot Dog1', path: paths.travel.tours },
      { title: 'Enbody Quadruped Robot Dog2', path: paths.travel.tour },
      { title: 'Enbody Quadruped Robot Dog3', path: paths.learning.courses },
      { title: 'Enbody Quadruped Robot Dog4', path: paths.learning.course }
    ],
    
  },
  // {
  //   order: '5',
  //   subheader: 'Common',
  //   items: [
  //     { title: 'Student Stories', path: paths.loginCover },
  //     { title: 'Reference Books', path: paths.loginCover },
  //     { title: 'Talk to Us', path: paths.loginCover },
  //     // { title: 'Login Illustration', path: paths.loginIllustration },
  //     // { title: 'Login Background', path: paths.loginBackground },
  //     // { title: 'Register Cover', path: paths.registerCover },
  //     // { title: 'Register Illustration', path: paths.registerIllustration },
  //     // { title: 'Register Background', path: paths.registerBackground },
  //     // { title: 'Forgot Password', path: paths.forgotPassword },
  //     // { title: 'Verify Code', path: paths.verify },
  //     // { title: '404 Error', path: paths.page404 },
  //     // { title: '500 Error', path: paths.page500 },
  //     // { title: 'Maintenance', path: paths.maintenance },
  //     // { title: 'ComingSoon', path: paths.comingsoon },
  //     // { title: 'Pricing 01', path: paths.pricing01 },
  //     // { title: 'Pricing 02', path: paths.pricing02 },
  //     // { title: 'Payment', path: paths.payment },
  //     // { title: 'Support', path: paths.support },
  //   ],
  // },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Transformative Projects', path: paths.eLearning.courses, children: [pageLinks[3]] },
  { title: 'Technology Transfers', path: paths.eLearning.courses, children: [pageLinks[0],pageLinks[1],pageLinks[2]] },
  //   children: [pageLinks[0], pageLinks[1], pageLinks[2], pageLinks[3], pageLinks[4], pageLinks[5]],
  // },
  { title: 'About Us', path: paths.eLearning.about },
  { title: 'Contact', path: paths.eLearning.contact },
  // { title: 'Docs', path: paths.docs },
];
