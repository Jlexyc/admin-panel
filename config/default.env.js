module.exports = {
  NODE_ENV: '"default"',
  HORIZON_SERVER: '"http://94.130.199.64:8000"',
  STORAGE_SERVER: '"http://94.130.199.64:9001/api"',
  KEY_SERVER_ADMIN: '"http://94.130.199.64:8006"',
  NETWORK_PASSPHRASE: '"TokenD Developer Network"'
  FEATURES: {
    /* Enable authentication using seed. Such auth has no 2FA.
    * WARN: for demo purposes only, could be very dangerous on prod
    */
    SEED_AUTH: true,

    PHOTO_VERIFICATION: true,
    KYC_REVIEW_MANAGER: false,
    KYC_REQUEST_STATES: [
      '"approved"',
      '"rejected"',
      '"pending"'
    ],
    KYC_TASKS: {
      superAdmin: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      photoMatch: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      validPoa: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      requestForAutoReviewSent: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      requestForAutoReviewApproved: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      accreditedInvestor: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: false
        }
      },
      nonLatinDocs: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: false
        }
      }
    }
  }
}
