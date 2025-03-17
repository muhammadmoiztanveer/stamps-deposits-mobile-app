/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
      id
      email
      name
      nameLower
      fullPhoneNumber
      countryCode
      phoneNumber
      paymentType
      balance
      purchaseCount
      freeDrinks
      coins
      stamps
      createdAt
      updatedAt
      deposits {
        items {
          id
          userID
          amount
          createdAt
          updatedAt
          user {
            id
            email
            name
            nameLower
            fullPhoneNumber
            countryCode
            phoneNumber
            paymentType
            balance
            purchaseCount
            freeDrinks
            coins
            stamps
            createdAt
            updatedAt
            deposits {
              items {
                id
                userID
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            payments {
              items {
                id
                userID
                stamps
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      payments {
        items {
          id
          userID
          stamps
          amount
          createdAt
          updatedAt
          user {
            id
            email
            name
            nameLower
            fullPhoneNumber
            countryCode
            phoneNumber
            paymentType
            balance
            purchaseCount
            freeDrinks
            coins
            stamps
            createdAt
            updatedAt
            deposits {
              items {
                id
                userID
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            payments {
              items {
                id
                userID
                stamps
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
      id
      email
      name
      nameLower
      fullPhoneNumber
      countryCode
      phoneNumber
      paymentType
      balance
      purchaseCount
      freeDrinks
      coins
      stamps
      createdAt
      updatedAt
      deposits {
        items {
          id
          userID
          amount
          createdAt
          updatedAt
          user {
            id
            email
            name
            nameLower
            fullPhoneNumber
            countryCode
            phoneNumber
            paymentType
            balance
            purchaseCount
            freeDrinks
            coins
            stamps
            createdAt
            updatedAt
            deposits {
              items {
                id
                userID
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            payments {
              items {
                id
                userID
                stamps
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      payments {
        items {
          id
          userID
          stamps
          amount
          createdAt
          updatedAt
          user {
            id
            email
            name
            nameLower
            fullPhoneNumber
            countryCode
            phoneNumber
            paymentType
            balance
            purchaseCount
            freeDrinks
            coins
            stamps
            createdAt
            updatedAt
            deposits {
              items {
                id
                userID
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            payments {
              items {
                id
                userID
                stamps
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
      id
      email
      name
      nameLower
      fullPhoneNumber
      countryCode
      phoneNumber
      paymentType
      balance
      purchaseCount
      freeDrinks
      coins
      stamps
      createdAt
      updatedAt
      deposits {
        items {
          id
          userID
          amount
          createdAt
          updatedAt
          user {
            id
            email
            name
            nameLower
            fullPhoneNumber
            countryCode
            phoneNumber
            paymentType
            balance
            purchaseCount
            freeDrinks
            coins
            stamps
            createdAt
            updatedAt
            deposits {
              items {
                id
                userID
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            payments {
              items {
                id
                userID
                stamps
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      payments {
        items {
          id
          userID
          stamps
          amount
          createdAt
          updatedAt
          user {
            id
            email
            name
            nameLower
            fullPhoneNumber
            countryCode
            phoneNumber
            paymentType
            balance
            purchaseCount
            freeDrinks
            coins
            stamps
            createdAt
            updatedAt
            deposits {
              items {
                id
                userID
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            payments {
              items {
                id
                userID
                stamps
                amount
                createdAt
                updatedAt
                user {
                  id
                  email
                  name
                  nameLower
                  fullPhoneNumber
                  countryCode
                  phoneNumber
                  paymentType
                  balance
                  purchaseCount
                  freeDrinks
                  coins
                  stamps
                  createdAt
                  updatedAt
                  deposits {
                    nextToken
                    __typename
                  }
                  payments {
                    nextToken
                    __typename
                  }
                  __typename
                }
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onCreateDeposits = /* GraphQL */ `
  subscription OnCreateDeposits($filter: ModelSubscriptionDepositsFilterInput) {
    onCreateDeposits(filter: $filter) {
      id
      userID
      amount
      createdAt
      updatedAt
      user {
        id
        email
        name
        nameLower
        fullPhoneNumber
        countryCode
        phoneNumber
        paymentType
        balance
        purchaseCount
        freeDrinks
        coins
        stamps
        createdAt
        updatedAt
        deposits {
          items {
            id
            userID
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        payments {
          items {
            id
            userID
            stamps
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateDeposits = /* GraphQL */ `
  subscription OnUpdateDeposits($filter: ModelSubscriptionDepositsFilterInput) {
    onUpdateDeposits(filter: $filter) {
      id
      userID
      amount
      createdAt
      updatedAt
      user {
        id
        email
        name
        nameLower
        fullPhoneNumber
        countryCode
        phoneNumber
        paymentType
        balance
        purchaseCount
        freeDrinks
        coins
        stamps
        createdAt
        updatedAt
        deposits {
          items {
            id
            userID
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        payments {
          items {
            id
            userID
            stamps
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteDeposits = /* GraphQL */ `
  subscription OnDeleteDeposits($filter: ModelSubscriptionDepositsFilterInput) {
    onDeleteDeposits(filter: $filter) {
      id
      userID
      amount
      createdAt
      updatedAt
      user {
        id
        email
        name
        nameLower
        fullPhoneNumber
        countryCode
        phoneNumber
        paymentType
        balance
        purchaseCount
        freeDrinks
        coins
        stamps
        createdAt
        updatedAt
        deposits {
          items {
            id
            userID
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        payments {
          items {
            id
            userID
            stamps
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onCreatePayments = /* GraphQL */ `
  subscription OnCreatePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onCreatePayments(filter: $filter) {
      id
      userID
      stamps
      amount
      createdAt
      updatedAt
      user {
        id
        email
        name
        nameLower
        fullPhoneNumber
        countryCode
        phoneNumber
        paymentType
        balance
        purchaseCount
        freeDrinks
        coins
        stamps
        createdAt
        updatedAt
        deposits {
          items {
            id
            userID
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        payments {
          items {
            id
            userID
            stamps
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onUpdatePayments = /* GraphQL */ `
  subscription OnUpdatePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onUpdatePayments(filter: $filter) {
      id
      userID
      stamps
      amount
      createdAt
      updatedAt
      user {
        id
        email
        name
        nameLower
        fullPhoneNumber
        countryCode
        phoneNumber
        paymentType
        balance
        purchaseCount
        freeDrinks
        coins
        stamps
        createdAt
        updatedAt
        deposits {
          items {
            id
            userID
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        payments {
          items {
            id
            userID
            stamps
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onDeletePayments = /* GraphQL */ `
  subscription OnDeletePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onDeletePayments(filter: $filter) {
      id
      userID
      stamps
      amount
      createdAt
      updatedAt
      user {
        id
        email
        name
        nameLower
        fullPhoneNumber
        countryCode
        phoneNumber
        paymentType
        balance
        purchaseCount
        freeDrinks
        coins
        stamps
        createdAt
        updatedAt
        deposits {
          items {
            id
            userID
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        payments {
          items {
            id
            userID
            stamps
            amount
            createdAt
            updatedAt
            user {
              id
              email
              name
              nameLower
              fullPhoneNumber
              countryCode
              phoneNumber
              paymentType
              balance
              purchaseCount
              freeDrinks
              coins
              stamps
              createdAt
              updatedAt
              deposits {
                items {
                  id
                  userID
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              payments {
                items {
                  id
                  userID
                  stamps
                  amount
                  createdAt
                  updatedAt
                  user {
                    id
                    email
                    name
                    nameLower
                    fullPhoneNumber
                    countryCode
                    phoneNumber
                    paymentType
                    balance
                    purchaseCount
                    freeDrinks
                    coins
                    stamps
                    createdAt
                    updatedAt
                    __typename
                  }
                  __typename
                }
                nextToken
                __typename
              }
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onCreateDrinks = /* GraphQL */ `
  subscription OnCreateDrinks($filter: ModelSubscriptionDrinksFilterInput) {
    onCreateDrinks(filter: $filter) {
      id
      name
      nameLower
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDrinks = /* GraphQL */ `
  subscription OnUpdateDrinks($filter: ModelSubscriptionDrinksFilterInput) {
    onUpdateDrinks(filter: $filter) {
      id
      name
      nameLower
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDrinks = /* GraphQL */ `
  subscription OnDeleteDrinks($filter: ModelSubscriptionDrinksFilterInput) {
    onDeleteDrinks(filter: $filter) {
      id
      name
      nameLower
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
