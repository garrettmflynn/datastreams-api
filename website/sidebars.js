/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: "tutorials/intro"
    },
      {
        "Basics": [
        "tutorials/tutorial-basics/create-a-document",
      ]
    },
      {
        "Extras": [
          "tutorials/tutorial-extras/manage-docs-versions",
        ]
      }
    ],

  referenceSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: "reference/README",
    },
        {
          "Core": [
          "reference/classes/DataDevices",
          "reference/classes/DataPipeline",
          "reference/classes/DataStream",
          "reference/classes/DataStreamTrack",
          "reference/classes/DataStreamTrackGenerator",
          "reference/classes/DataStreamTrackProcessor"
        ]
      }
    ]
};

module.exports = sidebars;
