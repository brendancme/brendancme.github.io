import type { ImageMetadata } from 'astro';
import anzen from '../assets/portfolio/anzen.svg';
import ftx from '../assets/portfolio/ftx.jpg';
import strategy from '../assets/portfolio/strategy.jpg';
import lineBot from '../assets/portfolio/line-bot.svg';
import grenade from '../assets/portfolio/grenade.jpg';
import evernew from '../assets/portfolio/evernew.jpg';

export type Figure = {
  src: ImageMetadata;
  alt: string;
  caption: string;
  // 'wide' spans the column; 'side' sits beside the text (for tall screenshots).
  layout: 'wide' | 'side';
};

export type Project = {
  name: string;
  year?: string;
  stack: string;
  summary: string;
  points?: string[];
  link?: { label: string; href: string };
  figure?: Figure;
};

export const projects: Project[] = [
  {
    name: 'Anzen Finance — Protocol v2',
    year: '2023 – 2025',
    stack: 'Solidity · Foundry · LayerZero',
    summary:
      'Anzen is an RWA-backed stablecoin protocol. As its smart contract developer I wrote the v2 contracts, from the core protocol to the cross-chain token deployments.',
    points: [
      'USDz stablecoin, staked sUSDz, vault and price oracles',
      'Omnichain USDz and sUSDz tokens, with LayerZero, Axelar and Wormhole bridge adapters',
      'Chainlink-compatible sUSDz/USDz exchange-rate adapter and reward distribution',
    ],
    link: { label: 'github', href: 'https://github.com/Anzen-Finance/protocol-v2' },
    figure: {
      src: anzen,
      alt: 'Diagram of the Anzen v2 contracts. On Ethereum, a user deposits USDC into USDz, which mints USDz and passes the USDC to SPCTPool in exchange for SPCT collateral; the pool lends the USDC out to off-chain credit. A Chainlink-fed SPCT price oracle gates USDz with a collateral-rate check. USDz can be staked into sUSDz, an ERC-4626 vault that receives yield in USDz. Both tokens bridge to child tokens on other chains.',
      caption: 'Contract architecture: USDC mints USDz against SPCT collateral, USDz stakes into sUSDz, and both tokens bridge to other chains.',
      layout: 'wide',
    },
  },
  {
    name: 'FTX API Wrapper',
    stack: 'Python',
    summary:
      'An unofficial wrapper for the FTX exchange HTTP API, for fetching market data, placing orders and building third-party clients. FTX ceased operating in November 2022; the code is kept for reference.',
    points: [
      'All public and private endpoints except OTC and options',
      'API key and secret authentication',
      'Withdrawals deliberately unsupported, for asset safety',
    ],
    link: { label: 'github', href: 'https://github.com/brendancme/ftx-api-wrapper-python3' },
    figure: {
      src: ftx,
      alt: 'Screenshot of the FTX exchange front page',
      caption: 'The FTX exchange, whose HTTP API the library wraps.',
      layout: 'wide',
    },
  },
  {
    name: 'Quantitative Strategy',
    stack: 'Python',
    summary: 'A quantitative strategy for Bitcoin futures trading.',
    points: ['Backtesting', 'Stop-loss and take-profit'],
    figure: {
      src: strategy,
      alt: 'Backtest report with a rising PnL curve above bar charts of profit, volume and position',
      caption: 'Backtest report: cumulative PnL, per-period profit, volume and position, and asset utilisation.',
      layout: 'wide',
    },
  },
  {
    name: 'Grenade Line ChatBot',
    year: '2020 – Now',
    stack: 'Python · Flask · LINE',
    summary:
      'The chatbot behind Grenade\'s LINE official account. The first version, from 2020, answered cryptocurrency lookups; it has been revised several times since.',
    points: [
      'Price, Ethereum gas and Ethereum address lookup',
      'BTC Fear and Greed Index',
      'USDT–TWD exchange rate',
    ],
    link: { label: 'line', href: 'https://line.me/R/ti/p/%40876riaaq' },
    figure: {
      src: lineBot,
      alt: 'Diagram of the 2020 bot. A command typed in a LINE chat reaches the Messaging API, which posts it to a Flask webhook that checks the signature. A regex router picks one of three reply builders, for text, image or Flex messages, each of which pulls market data from external APIs before the reply goes back through LINE.',
      caption: 'Message flow of the 2020 version: the webhook routes each command to a text, image or Flex reply.',
      layout: 'wide',
    },
  },
  {
    name: 'Grenade',
    year: '2020 – Now',
    stack: 'WordPress · Blocksy · Elementor',
    summary:
      'Website for Grenade, a Taiwanese crypto media outlet covering exchanges, crypto cards and AI tools. I have looked after the site since 2020, through several rebuilds.',
    link: { label: 'grenade.tw', href: 'https://www.grenade.tw/' },
    figure: {
      src: grenade,
      alt: 'Screenshot of the Grenade home page, with a featured exchange guide and a list of recent articles',
      caption: 'The Grenade home page, November 2026.',
      layout: 'wide',
    },
  },
  {
    name: 'Evernew Capital',
    year: '2020 – 2025',
    stack: 'Hugo · previously WordPress',
    summary:
      'Website for Evernew Capital, a crypto venture fund founded in 2018. I looked after the site as the fund\'s IT support; first built on WordPress, it now runs on Hugo.',
    link: { label: 'evernewcap.com', href: 'https://evernewcap.com/' },
    figure: {
      src: evernew,
      alt: 'Screenshot of the Evernew Capital home page',
      caption: 'The Evernew Capital home page, November 2026.',
      layout: 'wide',
    },
  },
];
