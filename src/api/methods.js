export default [
    {
      "api": "database_api",
      "method": "set_subscribe_callback",
      "params": ["callback", "clearFilter"]
    },
    {
      "api": "database_api",
      "method": "set_pending_transaction_callback",
      "params": ["cb"]
    },
    {
      "api": "database_api",
      "method": "set_block_applied_callback",
      "params": ["cb"]
    },
    {
      "api": "database_api",
      "method": "cancel_all_subscriptions"
    },
    {
      "api": "tags_api",
      "method": "get_popular_tags",
      "params": ["afterTag", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_tags_used_by_author",
      "params": ["author"]
    },
    {
      "api": "tags_api",
      "method": "get_post_discussions_by_payout",
      "params": ["query"]
    },
    {
      "api": "tags_api",
      "method": "get_comment_discussions_by_payout",
      "params": ["query"]
    },
    {
      "api": "tags_api",
      "method": "get_discussion",
      "params": ["author", "permlink"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_popular",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_discussions_by_popular30",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_now",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_active",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_cashout",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_discussions_by_payout",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_votes",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_children",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_skyrockets",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_feed",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_blog",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_comments",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_promoted",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_block_header",
      "params": ["blockNum"]
    },
    {
      "api": "condenser_api",
      "method": "get_block",
      "params": ["blockNum"]
    },
    {
      "api": "account_history_api",
      "method": "get_ops_in_block",
      "params": ["blockNum", "onlyVirtual"]
    },
    {
      "api": "condenser_api",
      "method": "get_state",
      "params": ["path"]
    },
  {
      "api": "condenser_api",
      "method": "get_download",
      "params": ["downloader", "comment_author", "comment_permlink", "signature"]
    },
    {
      "api": "database_api",
      "method": "get_popular_categories",
      "params": ["after", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_best_categories",
      "params": ["after", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_active_categories",
      "params": ["after", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_recent_categories",
      "params": ["after", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_config"
    },
    {
      "api": "database_api",
      "method": "get_dynamic_global_properties"
    },
    {
      "api": "condenser_api",
      "method": "get_chain_properties"
    },
    {
      "api": "database_api",
      "method": "get_feed_history"
    },
    {
      "api": "condenser_api",
      "method": "get_current_median_history_price"
    },
    {
      "api": "database_api",
      "method": "get_witness_schedule"
    },
    {
      "api": "condenser_api",
      "method": "get_hardfork_version"
    },
    {
      "api": "condenser_api",
      "method": "get_next_scheduled_hardfork"
    },
    {
      "api": "account_by_key_api",
      "method": "get_key_references",
      "params": ["key"]
    },
    {
      "api": "condenser_api",
      "method": "get_accounts",
      "params": ["names"]
    },
    {
      "api": "condenser_api",
      "method": "get_account_references",
      "params": ["accountId"]
    },
    {
      "api": "condenser_api",
      "method": "lookup_account_names",
      "params": ["accountNames"]
    },
    {
      "api": "condenser_api",
      "method": "lookup_accounts",
      "params": ["lowerBoundName", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_account_count"
    },
    {
      "api": "condenser_api",
      "method": "get_conversion_requests",
      "params": ["accountName"]
    },
    {
      "api": "account_history_api",
      "method": "get_account_history",
      "params": ["account", "from", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_owner_history",
      "params": ["account"]
    },
    {
      "api": "condenser_api",
      "method": "get_recovery_request",
      "params": ["account"]
    },
    {
      "api": "condenser_api",
      "method": "get_escrow",
      "params": ["from", "escrowId"]
    },
    {
      "api": "condenser_api",
      "method": "get_withdraw_routes",
      "params": ["account", "withdrawRouteType"]
    },
    {
      "api": "witness_api",
      "method": "get_account_bandwidth",
      "params": ["account", "bandwidthType"]
    },
    {
      "api": "condenser_api",
      "method": "get_savings_withdraw_from",
      "params": ["account"]
    },
    {
      "api": "condenser_api",
      "method": "get_savings_withdraw_to",
      "params": ["account"]
    },
    {
      "api": "condenser_api",
      "method": "get_order_book",
      "params": ["limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_open_orders",
      "params": ["owner"]
    },
    {
      "api": "database_api",
      "method": "get_liquidity_queue",
      "params": ["start_account", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_transaction_hex",
      "params": ["trx"]
    },
    {
      "api": "condenser_api",
      "method": "get_transaction",
      "params": ["trxId"]
    },
    {
      "api": "database_api",
      "method": "get_required_signatures",
      "params": ["trx", "availableKeys"]
    },
    {
      "api": "database_api",
      "method": "get_potential_signatures",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "verify_authority",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "verify_account_authority",
      "params": ["nameOrId", "signers"]
    },
    {
      "api": "condenser_api",
      "method": "get_active_votes",
      "params": ["author", "permlink"]
    },
    {
      "api": "condenser_api",
      "method": "get_account_votes",
      "params": ["voter"]
    },
    {
      "api": "condenser_api",
      "method": "get_content",
      "params": ["author", "permlink"]
    },
    {
      "api": "tags_api",
      "method": "get_content_replies",
      "params": ["author", "permlink"]
    },
    {
      "api": "tags_api",
      "method": "get_discussions_by_author_before_date",
      "params": ["author", "start_permlink", "before_date", "limit"]
    },
    {
      "api": "tags_api",
      "method": "get_replies_by_last_update",
      "params": ["start_author", "start_permlink", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_witnesses",
      "params": ["witnessIds"]
    },
    {
      "api": "condenser_api",
      "method": "get_witness_by_account",
      "params": ["accountName"]
    },
    {
      "api": "condenser_api",
      "method": "get_witnesses_by_vote",
      "params": ["from", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "lookup_witness_accounts",
      "params": ["lowerBoundName", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_witness_count"
    },
    {
      "api": "database_api",
      "method": "get_active_witnesses"
    },
    {
      "api": "database_api",
      "method": "get_miner_queue"
    },
    {
      "api": "database_api",
      "method": "get_reward_funds",
      "params": ["name"]
    },
    {
      "api": "condenser_api",
      "method": "get_vesting_delegations",
      "params": ["account", "from", "limit"]
    },
    {
      "api": "login_api",
      "method": "login",
      "params": ["username", "password"]
    },
    {
      "api": "login_api",
      "method": "get_api_by_name",
      "params": ["database_api"]
    },
    {
      "api": "database_api",
      "method": "get_version"
    },
    {
      "api": "follow_api",
      "method": "get_followers",
      "params": ["account", "start", "type", "limit"]
    },
    {
      "api": "follow_api",
      "method": "get_following",
      "params": ["account", "start", "type", "limit"]
    },
    {
      "api": "follow_api",
      "method": "get_follow_count",
      "params": ["account"]
    },
    {
      "api": "follow_api",
      "method": "get_feed_entries",
      "params": ["account", "entryId", "limit"
      ]
    },
    {
      "api": "follow_api",
      "method": "get_feed",
      "params": ["account", "entryId", "limit"]
    },
    {
      "api": "follow_api",
      "method": "get_blog_entries",
      "params": ["account", "entryId", "limit"]
    },
    {
      "api": "follow_api",
      "method": "get_blog",
      "params": ["account", "entryId", "limit"]
    },
    {
      "api": "follow_api",
      "method": "get_account_reputations",
      "params": ["lowerBoundName", "limit"]
    },
    {
      "api": "follow_api",
      "method": "get_reblogged_by",
      "params": ["author", "permlink"]
    },
    {
      "api": "follow_api",
      "method": "get_blog_authors",
      "params": ["blogAccount"]
    },
    {
      "api": "network_broadcast_api",
      "method": "broadcast_transaction",
      "params": ["trx"]
    },
    {
      "api": "network_broadcast_api",
      "method": "broadcast_transaction_with_callback",
      "params": ["confirmationCallback", "trx"]
    },
    {
      "api": "condenser_api",
      "method": "broadcast_transaction_synchronous",
      "params": ["trx"]
    },
    {
      "api": "network_broadcast_api",
      "method": "broadcast_block",
      "params": ["b"]
    },
    {
      "api": "network_broadcast_api",
      "method": "set_max_block_age",
      "params": ["maxBlockAge"]
    },
    {
      "api": "market_history_api",
      "method": "get_ticker",
      "params": []
    },
    {
      "api": "market_history_api",
      "method": "get_volume",
      "params": []
    },
    {
      "api": "market_history_api",
      "method": "get_order_book",
      "method_name": "getMarketOrderBook",
      "params": ["limit"]
    },
    {
      "api": "market_history_api",
      "method": "get_trade_history",
      "params": ["start", "end", "limit"]
    },
    {
      "api": "market_history_api",
      "method": "get_recent_trades",
      "params": ["limit"]
    },
    {
      "api": "market_history_api",
      "method": "get_market_history",
      "params": ["bucket_seconds" , "start", "end"]
    },
    {
      "api": "market_history_api",
      "method": "get_market_history_buckets",
      "params": []
    }
];
