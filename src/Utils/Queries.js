import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_OAUTH_URL = gql`
  query biliraOAuthUrl($campaignId: String!) {
    biliraOAuthUrl(campaignId: $campaignId) {
      authorizationUri
    }
  }
`;

export const ALL_CAMPAIGN_DETAILS = gql`
  query allCampaignDetails {
    allCampaignDetails {
      collectedAmount
      targetAmount
    }
  }
`;

export const GET_CORPORATE_SPONSORS = gql`
  query corporateSponsors {
    corporateSponsors {
      type
      name
      url
      image
    }
  }
`;

export const GET_INDIVIDUAL_SPONSORS = gql`
  query individualSponsors($top: Int) {
    individualSponsors(top: $top) {
      address
      amount
      tokenName
    }
  }
`;
