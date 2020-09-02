import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_OAUTH_URL = gql`
  query biliraOAuthUrl($campaignId: String!) {
    biliraOAuthUrl(campaignId: $campaignId) {
      authorizationUri
    }
  }
`;
