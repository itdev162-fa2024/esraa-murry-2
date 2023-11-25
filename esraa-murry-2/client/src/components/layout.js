import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import "./layout.css";
import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { Gray } from "./themes/Gray";
import Header from "./header";
import "./layout.css";


const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
        <ThemeProvider theme={Gray}>
          <Header siteTitle={data.site.siteMetadata.title || 'Title'} />
          <Content>
            <main>{children}</main>
            <footer
              style={{
                marginTop: 'var(--space-5)',
                fontSize: 'var(--font-sm)',
              }}
            >
              © {new Date().getFullYear()} &middot; Built with {`{**}`}
            </footer>
          </Content>
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </ThemeProvider>
      );
            }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Layout;