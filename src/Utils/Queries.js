import { gql } from '@apollo/client';

export const GET_OAUTH_URL = gql`
  query biliraOAuthUrl($campaignId: String!, $returnUrl: String) {
    biliraOAuthUrl(campaignId: $campaignId, returnUrl: $returnUrl) {
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

export const GET_LATEST_DONATIONS = gql`
  query {
    allCampaignDetails {
      targetAmount
      collectedAmount
      transactions {
        when
        amount
        tokenName
        from {
          address
          name
          campaignCode
        }
        to {
          address
          name
          campaignCode
        }
      }
    }
  }
`;

export const GET_BANKS = gql`
  {
    systemBankAccounts {
      id
      name
      iban
    }
  }
`;

export const COLLECT_DONATION = gql`
  mutation collectDonation(
    $campaignCode: String!
    $bankId: Int
    $email: String!
    $amount: Float!
  ) {
    collectDonation(
      campaignCode: $campaignCode
      bankId: $bankId
      email: $email
      amount: $amount
    ) {
      iban
      bankName
      referenceCode
    }
  }
`;
