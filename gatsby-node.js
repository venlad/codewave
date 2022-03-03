const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const industryTemplate = path.resolve(`src/templates/industries/en.js`)
  const industryTemplateArabic = path.resolve(`src/templates/industries/ar.js`)

  const serviceTemplate = path.resolve(`src/templates/services/en.js`)
  const serviceTemplateArabic = path.resolve(`src/templates/services/ar.js`)

  const { data } = await graphql(`
    {
      allStrapiIndustrie {
        edges {
          node {
            data {
              attributes {
                bannerBgColor
                description
                landingTitle1
                landingTitle2
                locale
                commonSlug

                textColor
                title
                industrybannerimg {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                industrylistimg {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                offerings {
                  offerHeading
                  offeringInfo
                  offers {
                    listitems
                  }
                  image {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
                successStories {
                  link
                  storyImage {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
                localizations {
                  data {
                    attributes {
                      industrybannerimg {
                        data {
                          attributes {
                            url
                            alternativeText
                          }
                        }
                      }
                      industrylistimg {
                        data {
                          attributes {
                            url
                            alternativeText
                          }
                        }
                      }
                      locale
                      title
                      commonSlug

                      offerings {
                        offeringInfo
                        offers {
                          listitems
                        }
                        image {
                          data {
                            attributes {
                              url
                              alternativeText
                            }
                          }
                        }
                      }
                      successStories {
                        link
                        storyImage {
                          data {
                            attributes {
                              url
                              alternativeText
                            }
                          }
                        }
                      }
                      bannerBgColor
                      description
                      landingTitle1
                      landingTitle2
                    }
                  }
                }
              }
            }
          }
        }
      }
      allStrapiService {
        edges {
          node {
            data {
              attributes {
                hero {
                  bgColor
                  heading
                  bgImage {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                intervention {
                  offeringInfo
                  offerHeading
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  offers {
                    listitems
                  }
                }
                locale
                title
                thumbnailTitle
                commonSlug

                servicelistingtitle
                sectionBgColor
                section
                videoSection {
                  link
                  para1
                  para2
                  textLink
                  video {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                phases {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                localizations {
                  data {
                    attributes {
                      title
                      thumbnailTitle
                      commonSlug

                      servicelistingtitle
                      sectionBgColor
                      section
                      videoSection {
                        link
                        para1
                        para2
                        textLink
                        video {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                      phases {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      locale
                      intervention {
                        offerHeading
                        offeringInfo
                        image {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                        offers {
                          listitems
                        }
                      }
                      hero {
                        bgColor
                        heading
                        bgImage {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                        image {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  data?.allStrapiIndustrie?.edges.forEach(({ node }) => {
    node.data.forEach(({ attributes }) => {
      createPage({
        path: `ar/industries/${attributes.commonSlug}`,
        component: industryTemplateArabic,
        context: {
          data: attributes,
          localizedData: attributes?.localizations?.data[0]?.attributes,
        },
      })
    })
  })

  data?.allStrapiIndustrie?.edges.forEach(({ node }) => {
    node.data.forEach(({ attributes }) => {
      createPage({
        path: `industries/${attributes.commonSlug}`,
        component: industryTemplate,
        context: {
          data: attributes,
        },
      })
    })
  })

  data.allStrapiService.edges.forEach(({ node }) => {
    node.data.forEach(({ attributes }) => {
      createPage({
        path: `ar/services/${attributes.commonSlug}`,
        component: serviceTemplateArabic,
        context: {
          data: attributes,
          localizedData: attributes?.localizations?.data[0]?.attributes,
        },
      })
    })
  })

  data.allStrapiService.edges.forEach(({ node }) => {
    node.data.forEach(({ attributes }) => {
      createPage({
        path: `services/${attributes.commonSlug}`,
        component: serviceTemplate,
        context: {
          data: attributes,
        },
      })
    })
  })
}

// //custom loader
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /gsap/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
