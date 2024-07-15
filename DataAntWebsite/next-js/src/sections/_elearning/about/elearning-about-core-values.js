import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Innovation',
    description:
      'Encourage creativity and the development of cutting-edge solutions. Innovation is the driving force behind technological advancements and your bootcamp aims to foster an environment where students are encouraged to think outside the box and develop novel approaches to solve complex problems.',
    icon: 'carbon:3d-curve-auto-colon',
  },
  {
    title: 'Excellence',
    description:
      'Strive for the highest standards in education and student performance. Excellence involves rigorous training, a strong commitment to mastering core concepts, and continuous improvement.',
    icon: 'carbon:chat-bot',
  },
  {
    title: 'Collaboration',
    description:
      'Promote teamwork and the sharing of knowledge. Collaboration is essential in the tech industry, and your bootcamp emphasizes the importance of working together to achieve common goals and advance collective understanding.',
    icon: 'carbon:airport-location',
  },
  {
    title: 'Impact',
    description:
      'Aim to create solutions that have a positive impact on society. This core value underscores the importance of using technology and AI to address real-world challenges and make meaningful contributions to various fields.',
    icon: 'carbon:event',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAboutCoreValues() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 15 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Core Values</Typography>

          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 540 } }}>
            By embracing these core values, our bootcamp provides a comprehensive and enriching
            educational experience that prepares students to become innovative, excellent,
            collaborative, and impactful leaders in the tech industry.
          </Typography>
        </Stack>

        <Grid container spacing={8}>
          {CORE_VALUES.map((value) => (
            <Grid
              key={value.title}
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} />

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
