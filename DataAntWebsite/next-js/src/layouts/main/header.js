import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';

import NavMobile from './nav/mobile';

import NavDesktop from './nav/desktop';
import { NavBasicDesktop } from 'src/components/nav-basic';
import {
  NavSectionMini,
  NavSectionVertical,
  NavSectionHorizontal,
} from 'src/components/nav-section';

import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />

        {/* <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener">
          <Label
            color="info"
            sx={{
              ml: 0.5,
              px: 0.5,
              top: -14,
              left: 60,
              height: 20,
              fontSize: 11,
              cursor: 'pointer',
              position: 'absolute',
            }}
          >
            v2.4.0
          </Label>
        </Link> */}
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            height: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <NavDesktop data={navConfig} />
          {/* <NavSectionHorizontal
            slotProps={{
              rootItem: {
                '& .icon': { display: 'none' },
              },
            }}
            data={[
              {
                subheader: 'Marketing',
                items: [
                  // {
                  //   title: 'Landing',
                  //   path: '#',
                  //   // icon: <Iconify icon="carbon:bat" width={1} />,
                  //   roles: ['admin'],
                  //   caption: 'Display only admin role',
                  // },
                  {
                    title: 'Home',
                    path: '/',
                    // icon: <Iconify icon="carbon:cyclist" width={1} />,
                    
                  },
                  {
                    title: 'Courses',
                    path: '/e-learning/courses/',
                    // icon: <Iconify icon="carbon:3d-cursor-alt" width={1} />,
                    // info: <Label color="error">+32</Label>,
                    children: [
                      { title: 'Case Studies', path: '#' },
                      { title: 'Case Study', path: '#' },
                    ],
                  },
                  {
                    title: 'Blog',
                    path: '#',
                    // icon: <Iconify icon="carbon:3d-mpr-toggle" width={1} />,
                    children: [
                      { title: 'Blog Posts', path: '#' },
                      { title: 'Blog Post', path: '#' },
                    ],
                  },
                ],
              },
              {
                subheader: 'Travel',
                items: [
                  {
                    title: 'About',
                    path: '#',
                    // icon: <Iconify icon="carbon:airport-01" width={1} />,
                  },
                  {
                    title: 'Contact',
                    path: '#',
                    // icon: <Iconify icon="carbon:battery-full" width={1} />,
                  },
                  {
                    title: 'Level',
                    path: '#',
                    // icon: <Iconify icon="carbon:play" width={1} />,
                    children: [
                      { title: 'Level 2.1', path: '#' },
                      { title: 'Level 2.2', path: '#' },
                      {
                        title: 'Level 2.3',
                        path: '#',
                        children: [
                          { title: 'Level 3.1', path: '#' },
                          { title: 'Level 3.2', path: '#' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          /> */}
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
      </>

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Searchbar /> */}

          <SettingsButton />
        </Stack>

        {/* <Button
          variant="contained"
          color="inherit"
          href={paths.zoneStore}
          target="_blank"
          rel="noopener"
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          Buy Now
        </Button> */}
      </Stack>

      {!mdUp && <NavMobile data={navConfig} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
