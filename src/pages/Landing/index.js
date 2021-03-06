import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from 'Components/compounds/Header';
import Footer from 'Components/compounds/Footer';
import FeaturedArticles from 'Components/compounds/FeaturedArticles';
import PopularArticles from 'Components/compounds/PopularArticles';
import PopularAuthors from 'Components/compounds/PopularAuthors';
import Button from 'Components/atoms/Button';
import bannerImage from 'Images/hero.jpg';
import { setHeroContent } from '../../store/actions/article';
import { socialAuth, resetCurrentUser } from '../../store/actions/authUser';
import './style.scss';

class Landing extends Component {
  componentDidMount() {
    const heroContent = {
      poster: bannerImage,
      name: 'AUTHOR\'S HAVEN',
      description:
      'A community where readers and writers come together to share and discuss knowledge and ideas.',
      buttonIsVisible: true,
      className: 'hero'
    };
    const { setHeroContentNow } = this.props;
    setHeroContentNow(heroContent);
  }

  render() {
    const { isAuth, history } = this.props;
    return (
      <div className="Landing-Flex-Wrap">
        <Header />
        <div className="body">
          <FeaturedArticles />
          <PopularArticles />
          <PopularAuthors />
          <div className="gap">
            {isAuth
              ? <Button color="green" onClick={() => history.push('/articles/new')}>WRITE</Button>
              : <Button color="green" onClick={() => toastr.success('comming soon...')}>GET STARTED</Button>
          }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroContent: state.article.heroContent,
  isAuth: state.authUser.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  setHeroContentNow: heroContent => dispatch(setHeroContent(heroContent)),
  socialAuthHandler: (media, code) => dispatch(socialAuth(media, code)),
  resetUser: user => dispatch(resetCurrentUser(user))
});

Landing.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  setHeroContentNow: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

Landing.defaultProps = {
  history: {
    push: () => ''
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
