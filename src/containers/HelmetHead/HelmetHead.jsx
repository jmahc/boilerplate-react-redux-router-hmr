// ==== Node Modules
import React, { Component } from 'react';
import Helmet from 'react-helmet';

class HelmetHead extends Component {
  render() {
    return (
      <Helmet
        base={{
          href: './',
          target: '_blank',
        }}
        htmlAttributes={{
          lang: 'en',
          amp: undefined,
        }}
        link={[
          { rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
          },
          {
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            rel: 'stylesheet',
          },
          {
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
            rel: 'stylesheet',
          },
        ]}
        meta={[
          { charset: 'utf-8' },
          {
            'http-equiv': 'x-ua-compatible',
            content: 'ie=edge',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          },
          {
            name: 'author',
            content: 'Jordan McArdle - GitHub @jmahc',
          },
          {
            name: 'description',
            content: 'Boilerplate code that works, for once. For now.',
          },
        ]}
        title="Boilerplate Application by Jordan McArdle"
        titleTemplate="%s | V. Alexander & Co., Inc."
      />
    );
  }
}

export default HelmetHead;
