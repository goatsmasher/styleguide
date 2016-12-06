import React from 'react';
import { Badge, Icon, LogoBox } from 'html/components';
import ResourcesIcon from 'html/img/resources-icon.svg';
import Auth0LogoBlue from 'auth0-styleguide-components/src/logos/img/logo-blue.svg';
import Auth0LogoGrey from 'auth0-styleguide-components/src/logos/img/logo-grey.svg';
import Auth0Badge from 'auth0-styleguide-components/src/logos/img/badge.svg';
import badgesConfiguration from './badges.json';
import iconsConfiguration from './icons.json';
import './index.styl';

const Resources = () =>
  <div className="styleguide-section resources-section">
    <section className="jumbotron">
      <h2><ResourcesIcon /></h2>
      <h1>Resources</h1>
      <p>Logo, Icons and badges.</p>
    </section>
    <section className="section-content">
      <section>
        <h2 id="logos">Logos</h2>
        <p>The available file formats include JPG, PNG, SVG and AI.</p>
        <div className="row">
          <LogoBox title="Blue version" downloadLink="https://cloudup.com/cmshMvKt2bD">
            <Auth0LogoBlue />
          </LogoBox>
          <LogoBox
            title="Grey version"
            logoClass="logo-dark"
            downloadLink="https://cloudup.com/cfievfeiyjb"
          >
            <Auth0LogoGrey />
          </LogoBox>
          <LogoBox title="Badge" downloadLink="https://cloudup.com/cHfNwqCZae0">
            <Auth0Badge />
          </LogoBox>
        </div>
      </section>
      <section>
        <h2 id="badges">Badges</h2>
        <p>Tipically used to reference SDKs or programming languages.</p>
        <div className="row">
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <Badge title="Sample" name="" />
          </div>
          { badgesConfiguration
              // eslint-disable-next-line no-confusing-arrow
              .sort((a, b) => a.title < b.title ? -1 : 1)
              .map(badge =>
                <div
                  className="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center"
                  key={badge.name || badge.title.toLowerCase()}
                >
                  <Badge title={badge.title} name={badge.name || badge.title.toLowerCase()} />
                </div>
          )}
        </div>
      </section>
      <section>
        <h2 id="icons">Icons</h2>
        <p>
          Iconography is another language to communicate visually. Built by &nbsp;
          <a href="http://budicon.buditanrim.co/preview">Budi</a>.
        </p>
        { iconsConfiguration.map(category =>
          <div className="icon-category" key={category.name}>
            <h4 className="icon-category-title">{category.name}</h4>
            <ul className="icon-category-list row">
              { category.icons.map(icon =>
                <li className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={icon.code}>
                  <Icon
                    cssClass={icon.code ? `icon-budicon-${icon.code}` : 'icon-budicon'}
                    name={icon.name || ''}
                  />
                </li>
            )}
            </ul>
          </div>
        )}
      </section>
    </section>
  </div>;

export default Resources;