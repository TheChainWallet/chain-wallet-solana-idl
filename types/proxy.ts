/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/proxy.json`.
 */
export type Proxy = {
  "address": "H8CqqrV63FSkR67eqVYjBWr4FbDKGrTeGn5kgvkqsDda",
  "metadata": {
    "name": "proxy",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "proxy",
      "discriminator": [
        15,
        160,
        123,
        200,
        251,
        36,
        176,
        26
      ],
      "accounts": [
        {
          "name": "executor",
          "writable": true,
          "signer": true
        },
        {
          "name": "custodyAccount"
        },
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  112,
                  112,
                  45,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ],
            "program": {
              "kind": "account",
              "path": "chainWalletProgram"
            }
          }
        },
        {
          "name": "proxySigner",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  120,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "proxyProgram"
        },
        {
          "name": "chainWalletProgram",
          "address": "8b1w214H6QshcE7EvFu2Kg6ry4pmKEdtiaB9yukRuk9k"
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "bytes"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "configState",
      "discriminator": [
        193,
        77,
        160,
        128,
        208,
        254,
        180,
        135
      ]
    },
    {
      "name": "custodyAccount",
      "discriminator": [
        6,
        34,
        189,
        110,
        69,
        211,
        16,
        27
      ]
    }
  ],
  "types": [
    {
      "name": "accountPassFilter",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "inList",
            "fields": [
              {
                "vec": "pubkey"
              }
            ]
          },
          {
            "name": "notInList",
            "fields": [
              {
                "vec": "pubkey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "accountPassTokenFilter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inOrNot",
            "type": {
              "defined": {
                "name": "inOrNot"
              }
            }
          },
          {
            "name": "list",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "token",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "accountStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "normal"
          },
          {
            "name": "locked"
          }
        ]
      }
    },
    {
      "name": "balanceType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "lamports"
          },
          {
            "name": "token"
          }
        ]
      }
    },
    {
      "name": "callProgramFilter",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "inList",
            "fields": [
              {
                "vec": "pubkey"
              }
            ]
          },
          {
            "name": "notInList",
            "fields": [
              {
                "vec": "pubkey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "configState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxEstimateGas",
            "type": "u64"
          },
          {
            "name": "feeTransaction",
            "type": "u64"
          },
          {
            "name": "feeCreate",
            "type": "u64"
          },
          {
            "name": "delayExecutor",
            "type": "pubkey"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "proxyProgram",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "custodyAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rules",
            "type": {
              "vec": {
                "defined": {
                  "name": "rule"
                }
              }
            }
          },
          {
            "name": "executors",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "managers",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "delayTransactions",
            "type": {
              "vec": {
                "defined": {
                  "name": "delayTransaction"
                }
              }
            }
          },
          {
            "name": "needApprovalTransactions",
            "type": {
              "vec": {
                "defined": {
                  "name": "needApprovalTransaction"
                }
              }
            }
          },
          {
            "name": "approvalNonce",
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "accountStatus"
              }
            }
          },
          {
            "name": "threshold",
            "type": "u8"
          },
          {
            "name": "seedsNonce",
            "type": "u64"
          },
          {
            "name": "bumps",
            "type": "u8"
          },
          {
            "name": "walletBumps",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "delayTransaction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "executeAt",
            "type": "i64"
          },
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "fillterType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "wallet",
            "fields": [
              {
                "defined": {
                  "name": "walletFilter"
                }
              }
            ]
          },
          {
            "name": "token",
            "fields": [
              {
                "defined": {
                  "name": "tokenFilter"
                }
              }
            ]
          },
          {
            "name": "callProgram",
            "fields": [
              {
                "defined": {
                  "name": "callProgramFilter"
                }
              }
            ]
          },
          {
            "name": "accountPass",
            "fields": [
              {
                "defined": {
                  "name": "accountPassFilter"
                }
              }
            ]
          },
          {
            "name": "accountPassToken",
            "fields": [
              {
                "defined": {
                  "name": "accountPassTokenFilter"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "inOrNot",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "in"
          },
          {
            "name": "notIn"
          }
        ]
      }
    },
    {
      "name": "needApprovalTransaction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "rule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fillter",
            "type": {
              "defined": {
                "name": "fillterType"
              }
            }
          },
          {
            "name": "ruleType",
            "type": {
              "defined": {
                "name": "ruleType"
              }
            }
          },
          {
            "name": "triggerType",
            "type": {
              "defined": {
                "name": "triggerType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "ruleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "effect"
          },
          {
            "name": "transferAmount",
            "fields": [
              {
                "defined": {
                  "name": "transferAmountRule"
                }
              }
            ]
          },
          {
            "name": "transferFreq",
            "fields": [
              {
                "defined": {
                  "name": "transferFreqRule"
                }
              }
            ]
          },
          {
            "name": "transferTimes",
            "fields": [
              {
                "defined": {
                  "name": "transferFreqTimesRule"
                }
              }
            ]
          },
          {
            "name": "transactionParams",
            "fields": [
              {
                "defined": {
                  "name": "transactionParamsRule"
                }
              }
            ]
          },
          {
            "name": "transactionTimes",
            "fields": [
              {
                "defined": {
                  "name": "transactionInvokeTimesRule"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "tokenFilter",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "inList",
            "fields": [
              {
                "vec": "pubkey"
              }
            ]
          },
          {
            "name": "notInList",
            "fields": [
              {
                "vec": "pubkey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "transactionByteRule",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "equal",
            "fields": [
              "bytes"
            ]
          },
          {
            "name": "between",
            "fields": [
              "bytes",
              "bytes"
            ]
          }
        ]
      }
    },
    {
      "name": "transactionInvokeTimesRule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "interval",
            "type": "i64"
          },
          {
            "name": "timeSlot",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "thresholdAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "transactionParamsRule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "from",
            "type": "u32"
          },
          {
            "name": "to",
            "type": "u32"
          },
          {
            "name": "isHitTrigger",
            "type": "bool"
          },
          {
            "name": "byteRule",
            "type": {
              "defined": {
                "name": "transactionByteRule"
              }
            }
          }
        ]
      }
    },
    {
      "name": "transferAmountRule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "balanceType",
            "type": {
              "defined": {
                "name": "balanceType"
              }
            }
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "transferDirection",
            "type": {
              "defined": {
                "name": "transferType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "transferFreqRule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "balanceType",
            "type": {
              "defined": {
                "name": "balanceType"
              }
            }
          },
          {
            "name": "transferDirection",
            "type": {
              "defined": {
                "name": "transferType"
              }
            }
          },
          {
            "name": "interval",
            "type": "i64"
          },
          {
            "name": "timeSlot",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u128"
          },
          {
            "name": "thresholdAmount",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "transferFreqTimesRule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "balanceType",
            "type": {
              "defined": {
                "name": "balanceType"
              }
            }
          },
          {
            "name": "transferDirection",
            "type": {
              "defined": {
                "name": "transferType"
              }
            }
          },
          {
            "name": "interval",
            "type": "i64"
          },
          {
            "name": "timeSlot",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "thresholdAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "transferType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "from"
          },
          {
            "name": "to"
          }
        ]
      }
    },
    {
      "name": "triggerType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "delay",
            "fields": [
              "i64"
            ]
          },
          {
            "name": "lock"
          },
          {
            "name": "approval"
          },
          {
            "name": "reject"
          }
        ]
      }
    },
    {
      "name": "walletFilter",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ]
};
