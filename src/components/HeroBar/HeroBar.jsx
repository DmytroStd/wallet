import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';

import { useMediaQuery } from 'react-responsive';

import { Wrap, Box } from './HeroBar.styled';

const HeroBar = () => {
  const isTabletOrBigScreen = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <Wrap>
        <Box>
          <Navigation />
          <Balance />
        </Box>
        {isTabletOrBigScreen && <Currency />}
      </Wrap>
    </>
  );
};

export default HeroBar;
