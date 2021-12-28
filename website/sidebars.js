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
      id: "index"
    },
    {
      type: 'autogenerated',
      dirName: 'tutorials', // '.' means the docs folder
    },
    ],

  referenceSidebar: [
    // {
    //   type: 'doc',
    //   label: 'Introduction',
    //   id: "reference/index",
    // },
    {
      type: 'autogenerated',
      dirName: 'reference', // '.' means the docs folder
    },
    // {
    //   type: 'category',
    //   label: 'Classes',
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'reference/classes', // generate sidebar from the docs folder (or versioned_docs/<version>)
    //     },
    //   ]
    // },
    // {
    //   type: 'category',
    //   label: 'Interfaces',
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'reference/interfaces', // generate sidebar from the docs folder (or versioned_docs/<version>)
    //     },
    //   ]
    // },
    // {
    //   type: 'category',
    //   label: 'Modules',
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'reference/modules', // generate sidebar from the docs folder (or versioned_docs/<version>)
    //     },
    //   ]
    // },
    ]
};

module.exports = sidebars;
