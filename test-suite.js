const screenScenarios = {
  'Shared & Onboarding': {
    'SplashScreen': [
      ['App Launch Initialization', 'Splash screen displays within 1s'],
      ['Logo Visibility', 'Logo is centered and visible'],
      ['Version Number Display', 'App version is correctly shown at bottom'],
      ['Background Color Validation', 'Background matches branding colors'],
      ['Transition to Welcome', 'Transitions to welcome screen automatically for new users'],
      ['Transition to Dashboard', 'Transitions directly to dashboard if already logged in'],
      ['Offline Launch', 'Shows cached data or offline indicator on launch'],
      ['Orientation Lock', 'Screen remains in portrait mode during launch'],
      ['Deep Link Interception', 'Correctly intercepts and routes deep links'],
      ['Rapid Backgrounding', 'Handles being sent to background during launch without crash']
    ],
    'WelcomeScreen': [
      ['Swipe Carousel', 'User can swipe left/right between onboarding slides'],
      ['Skip Button', 'Skip button immediately navigates to login/signup'],
      ['Next Button', 'Next button navigates to the next slide'],
      ['Get Started Button', 'Get Started button appears on the final slide'],
      ['Pagination Dots', 'Pagination dots update correctly on swipe'],
      ['Image Loading', 'Onboarding illustrations load without delay'],
      ['Text Readability', 'Titles and subtitles are readable and accessible'],
      ['Language Selection', 'Changing language updates onboarding text'],
      ['App Rotation', 'Carousel adjusts layout on device rotation'],
      ['System Font Size', 'Text scales appropriately with system font settings']
    ],
    'NotFoundPage': [
      ['Invalid Route Navigation', '404 page is displayed for unknown routes'],
      ['Return to Home', 'Home button successfully redirects to dashboard'],
      ['Error Graphic', 'Friendly 404 graphic is visible'],
      ['Missing Resource', 'Displays correct message for missing specific resources'],
      ['Back Button', 'System back button returns to previous valid screen'],
      ['Retry Action', 'Retry button attempts to reload the failed resource'],
      ['Dark Mode Support', '404 page colors invert correctly in dark mode'],
      ['Offline Fallback', 'Shows specific message if 404 is due to network'],
      ['Analytics Logging', '404 event is correctly logged to analytics'],
      ['Deep Link 404', 'Invalid deep links trigger the not found page smoothly']
    ]
  },
  'Authentication': {
    'LoginPage': [
      ['Valid Login', 'User successfully logs in and navigates to dashboard'],
      ['Invalid Password', 'Displays "Invalid Credentials" error message'],
      ['Invalid Email Format', 'Displays "Invalid email format" validation error'],
      ['Empty Email', 'Displays "Email is required" validation error'],
      ['Empty Password', 'Displays "Password is required" validation error'],
      ['Remember Me Functionality', 'Credentials are saved for next session'],
      ['Forgot Password Navigation', 'Navigates to the Forgot Password screen'],
      ['Session Persistence', 'App restart does not require re-login'],
      ['Login While Offline', 'Displays "No network connection" toast'],
      ['Account Lock After Multiple Attempts', 'Account locks after 5 failed attempts']
    ],
    'SignupPage': [
      ['Valid Registration', 'Account is created and user is logged in'],
      ['Duplicate Email', 'Displays "Email already in use" error'],
      ['Password Complexity', 'Rejects passwords not meeting complexity rules'],
      ['Passwords Do Not Match', 'Displays mismatch error for confirmation field'],
      ['Terms & Conditions Checkbox', 'Registration blocked if terms are not accepted'],
      ['Empty Required Fields', 'Highlights all empty required fields'],
      ['Invalid Phone Number', 'Rejects invalid phone number formats'],
      ['Nav to Login', 'Already have an account link navigates to Login'],
      ['Social Sign-up (Google)', 'Successfully signs up using Google account'],
      ['Social Sign-up (Apple)', 'Successfully signs up using Apple account']
    ],
    'ForgotPasswordPage': [
      ['Valid Email Submission', 'Confirmation message shown and email sent'],
      ['Unregistered Email', 'Displays generic "If email exists, link sent" message'],
      ['Invalid Email Format', 'Validation error for malformed email'],
      ['Empty Email Field', 'Validation error requesting email'],
      ['Back to Login Navigation', 'Returns to the login screen'],
      ['Multiple Requests Limit', 'Throttles consecutive reset requests'],
      ['Offline Request', 'Alerts user that network is required'],
      ['Keyboard Next Action', 'Keyboard submit triggers the reset action'],
      ['Screen Reader Support', 'Instruction text is read by screen readers'],
      ['Deep Link Return', 'Return to app from email deep link works']
    ],
    'ResetPasswordPage': [
      ['Valid Password Reset', 'Password updated and navigates to login'],
      ['Invalid Reset Token', 'Displays "Link expired or invalid" error'],
      ['Password Mismatch', 'Validation error if passwords do not match'],
      ['Password History Check', 'Prevents using the previous 3 passwords'],
      ['Password Strength Meter', 'Meter updates correctly as user types'],
      ['Empty Password', 'Validation error if fields are blank'],
      ['Token Expiration', 'Fails if token is older than 24 hours'],
      ['Show/Hide Password', 'Toggle icon reveals or obfuscates password'],
      ['Offline Reset Attempt', 'Alerts user that network is required'],
      ['Successful Login After Reset', 'User can login with the new password']
    ]
  },
  'Dashboard': {
    'DashboardPage': [
      ['Overview Metrics Load', 'Total balance, income, and expenses load correctly'],
      ['Recent Transactions Widget', 'Displays top 5 most recent transactions'],
      ['Pull to Refresh', 'Dashboard data updates when pulled down'],
      ['Navigate to Transaction List', 'View All button opens full transaction list'],
      ['Chart Rendering', 'Financial summary chart renders correctly'],
      ['Quick Add Button', 'FAB opens the Add Transaction screen'],
      ['Empty State', 'Shows onboarding prompts if no data exists'],
      ['Data Privacy Blur', 'Eye icon blurs/reveals financial amounts'],
      ['Widget Reordering', 'User can drag and drop widgets to reorder'],
      ['Offline Dashboard', 'Displays cached data with offline indicator']
    ]
  },
  'Finance': {
    'TransactionListPage': [
      ['View Transactions', 'List of all transactions is displayed'],
      ['Search Transaction', 'Search filters list by merchant or note'],
      ['Filter By Date', 'List updates based on selected date range'],
      ['Filter By Category', 'List updates based on selected category'],
      ['Sort Ascending', 'Transactions sorted oldest to newest'],
      ['Sort Descending', 'Transactions sorted newest to oldest'],
      ['Empty Transaction List', 'Displays empty state illustration and message'],
      ['Pagination', 'Scrolling down loads more transactions'],
      ['Transaction Selection', 'Tapping a transaction opens details screen'],
      ['Transaction Refresh', 'Pulling down fetches latest transactions']
    ],
    'AddTransactionPage': [
      ['Valid Income Addition', 'Income transaction is saved and list updates'],
      ['Valid Expense Addition', 'Expense transaction is saved and balance updates'],
      ['Empty Amount', 'Validation error for missing amount'],
      ['Zero Amount', 'Validation error for zero amount'],
      ['Missing Category', 'Validation error for missing category'],
      ['Date Selection', 'Date picker selects and formats date correctly'],
      ['Add Receipt Image', 'Camera or gallery successfully attaches image'],
      ['Note Field Limit', 'Note field enforces character limit'],
      ['Currency Formatting', 'Amount automatically formats with currency symbol'],
      ['Discard Changes Prompt', 'Warns user if backing out with unsaved data']
    ],
    'TransactionDetailPage': [
      ['Data Accuracy', 'All transaction details match the list view'],
      ['Edit Button Navigation', 'Navigates to Edit Transaction screen'],
      ['Delete Transaction', 'Prompts confirmation and successfully deletes'],
      ['Receipt Viewing', 'Tapping receipt expands image to full screen'],
      ['Share Receipt', 'Share sheet opens for exporting receipt'],
      ['Category Icon', 'Displays correct icon for the assigned category'],
      ['Refund Display', 'Shows refund status if applicable'],
      ['Split Transaction View', 'Displays sub-transactions if split'],
      ['Merchant Location', 'Map preview displays if location is attached'],
      ['Return Navigation', 'Back button returns to the exact scroll position in list']
    ],
    'EditTransactionPage': [
      ['Valid Edit Save', 'Changes are saved and reflected in details'],
      ['Change Category', 'Updating category saves successfully'],
      ['Change Amount', 'Updating amount recalculates total balance'],
      ['Remove Receipt', 'Attached image is successfully removed'],
      ['Clear Note', 'Clearing the optional note saves correctly'],
      ['Invalid Date Edit', 'Cannot set future dates for past transactions'],
      ['Cancel Edit', 'Discarding changes reverts to original data'],
      ['Amount Exceeds Limit', 'Validation error for unrealistically high amount'],
      ['Change Transaction Type', 'Switching income to expense updates correctly'],
      ['Offline Edit', 'Changes are queued for sync when offline']
    ],
    'CategoryBreakdownPage': [
      ['Pie Chart Rendering', 'Categories render proportional slices in pie chart'],
      ['Category Selection', 'Tapping a slice filters transactions below'],
      ['Date Range Toggle', 'Switching month updates the breakdown data'],
      ['Zero Expense Month', 'Empty state shown for months with no expenses'],
      ['Subcategory Drilldown', 'Tapping category shows subcategory breakdown'],
      ['Color Consistency', 'Category colors match the global design system'],
      ['Percentage Calculation', 'Percentages add up to 100% accurately'],
      ['Exclude Category', 'User can temporarily exclude a category from view'],
      ['Export Breakdown', 'Generates and downloads PDF/CSV of breakdown'],
      ['Tooltip Display', 'Long pressing slice shows exact amount and percentage']
    ],
    'MonthlyReportPage': [
      ['Report Generation', 'Successfully generates report for current month'],
      ['Previous Month Navigation', 'Can swipe to view previous month reports'],
      ['Income vs Expense Bar', 'Bar chart accurately reflects ratio'],
      ['Top Spending Category', 'Identifies and displays the highest spend category'],
      ['Month over Month Comparison', 'Shows % change compared to previous month'],
      ['Savings Rate Calculation', 'Accurately calculates savings percentage'],
      ['Report Sharing', 'Can share summary snapshot image'],
      ['Incomplete Month Handling', 'Shows projection for current incomplete month'],
      ['PDF Export', 'Downloads a formatted PDF report'],
      ['Offline Viewing', 'Previously generated reports viewable offline']
    ],
    'RecurringExpensesPage': [
      ['List Subscriptions', 'All active recurring expenses are listed'],
      ['Upcoming Payment Indicator', 'Highlights payments due within 7 days'],
      ['Total Monthly Cost', 'Accurately sums all active recurring costs'],
      ['Pause Subscription', 'Marking as paused removes it from monthly total'],
      ['Cancel Subscription Link', 'Provides guidance/link to cancel external sub'],
      ['Mark as Paid', 'Manually marking as paid creates a transaction'],
      ['Sort by Due Date', 'Expenses sort chronologically by next due date'],
      ['Sort by Amount', 'Expenses sort from highest to lowest cost'],
      ['Empty State', 'Shows graphic when no recurring expenses exist'],
      ['Auto-detect Prompts', 'Suggests recurring expenses based on history']
    ],
    'AddRecurringExpensePage': [
      ['Valid Recurring Addition', 'New subscription is saved and listed'],
      ['Frequency Selection', 'Can select weekly, monthly, or yearly'],
      ['Next Due Date', 'Date picker correctly calculates future dates'],
      ['Auto-pay Toggle', 'Enabling auto-pay links to automatic transaction logging'],
      ['Reminder Setting', 'Can set notification reminder X days before due'],
      ['Empty Name Validation', 'Validation error for missing name'],
      ['Zero Amount Validation', 'Validation error for zero amount'],
      ['Currency Selection', 'Can select different currency for foreign subs'],
      ['Category Assignment', 'Properly assigns to a budget category'],
      ['Discard Prompt', 'Warns before losing unsaved recurring entry']
    ]
  },
  'Insights': {
    'InsightsOverviewPage': [
      ['Insights Generation', 'Displays AI-generated insights based on data'],
      ['Insight Dismissal', 'User can swipe to dismiss an insight card'],
      ['Actionable Insight Link', 'Tapping "Reduce Spending" links to budget'],
      ['Positive Reinforcement', 'Shows congratulatory insight for saving'],
      ['Unusual Spending Alert', 'Flags transactions 50% above average'],
      ['Data Refresh', 'Pulling down generates fresh insights'],
      ['Empty State', 'Requests more data if user has no transactions'],
      ['Insight Feedback', 'Thumbs up/down feedback works'],
      ['Historical Insights', 'Can view previously dismissed insights'],
      ['Offline Insights', 'Shows cached insights when offline']
    ],
    'WeeklyReportPage': [
      ['Weekly Summary Load', 'Displays summary for the Monday-Sunday period'],
      ['Day by Day Graph', 'Line graph shows spending per day'],
      ['Weekend vs Weekday', 'Compares spending habits between days'],
      ['Highest Spending Day', 'Highlights the day with most expenses'],
      ['Previous Week Comparison', 'Shows trend arrow compared to last week'],
      ['Category Shift', 'Highlights categories that spiked this week'],
      ['Share Weekly Report', 'Generates sharing image for social/messages'],
      ['Navigate to Transaction', 'Tapping a day filters the transaction list'],
      ['Future Week Handling', 'Cannot view reports for future weeks'],
      ['Empty Week', 'Shows "No activity" message for weeks with no data']
    ],
    'CashFlowPage': [
      ['Cash Flow Chart', 'Waterfall chart renders income vs expenses'],
      ['Net Income Calculation', 'Accurately calculates total net income'],
      ['Timeframe Toggle', 'Switches between 3-month, 6-month, and 1-year'],
      ['Projected Cash Flow', 'Shows dotted line for future projections'],
      ['Negative Cash Flow Warning', 'Highlights months where expenses > income in red'],
      ['Data Point Tooltip', 'Tapping a month shows exact breakdown'],
      ['Exclude Transfers', 'Toggle to exclude internal account transfers'],
      ['Trend Analysis', 'Text summary indicates if cash flow is improving'],
      ['Landscape Viewing', 'Chart expands to full screen in landscape mode'],
      ['PDF Export', 'Exports cash flow statement as PDF']
    ],
    'PredictionsPage': [
      ['End of Month Balance', 'Predicts balance based on current spending rate'],
      ['Upcoming Bills Deduction', 'Factors in recurring expenses into prediction'],
      ['Overspending Alert', 'Warns if predicted to exceed budget'],
      ['Safe to Spend Calculation', 'Shows daily allowance remaining'],
      ['Algorithm Accuracy Toggle', 'Shows confidence interval for predictions'],
      ['What-If Scenario', 'Allows user to simulate a large purchase'],
      ['Income Projection', 'Factors in expected regular income'],
      ['Historical Accuracy', 'Shows how accurate last month\'s prediction was'],
      ['Empty Data Handling', 'Requires 1 month of data to show predictions'],
      ['Visual Gauge', 'Speedometer gauge shows financial trajectory']
    ],
    'FinancialHealthPage': [
      ['Health Score Calculation', 'Displays a score out of 100 based on metrics'],
      ['Score Breakdown', 'Shows individual scores for savings, debt, spending'],
      ['Debt to Income Ratio', 'Accurately calculates and displays DTI'],
      ['Emergency Fund Status', 'Calculates months of expenses saved'],
      ['Score Improvement Tips', 'Provides actionable advice to increase score'],
      ['Historical Score Tracking', 'Line chart shows score over time'],
      ['Gamification Badge', 'Awards a badge for reaching "Excellent" health'],
      ['Score Recalculation', 'Updates immediately when new account is linked'],
      ['Peer Comparison', 'Shows how score compares to anonymous averages'],
      ['Info Tooltips', 'Explains how the health score is calculated']
    ]
  },
  'Goals': {
    'GoalsListPage': [
      ['View All Goals', 'List displays all active and completed goals'],
      ['Goal Progress Bar', 'Progress bars accurately reflect percentage saved'],
      ['Goal Sorting', 'Sorts by closest to completion by default'],
      ['Completed Goals Section', 'Separates achieved goals from active ones'],
      ['Quick Add Funds', 'Tapping "+" allows quick contribution'],
      ['Create Goal FAB', 'Floating action button opens Add Goal page'],
      ['Empty State', 'Shows illustration when no goals exist'],
      ['Goal Deadline Warning', 'Highlights goals that are behind schedule'],
      ['Total Goals Value', 'Shows sum of all goal targets'],
      ['Offline Viewing', 'Displays cached goals when offline']
    ],
    'AddGoalPage': [
      ['Create Goal With Valid Data', 'Goal is created and appears in list'],
      ['Empty Goal Name', 'Displays error for missing goal name'],
      ['Empty Target Amount', 'Displays error for missing target amount'],
      ['Negative Target Amount', 'Validation prevents negative amounts'],
      ['Goal Date In Past', 'Validation prevents setting target date in past'],
      ['Goal Date In Future', 'Accepts valid future target dates'],
      ['Duplicate Goal Name', 'Warns if goal name already exists'],
      ['Edit Goal After Creation', 'Can successfully edit newly created goal'],
      ['Cancel Goal Creation', 'Discarding returns to list without saving'],
      ['Goal Progress Calculation', 'Initial progress is set to 0% correctly']
    ],
    'GoalDetailPage': [
      ['Goal Information Display', 'Shows target, saved amount, and deadline'],
      ['Contribution History', 'Lists all transactions linked to this goal'],
      ['Add Funds Button', 'Opens modal to record a new contribution'],
      ['Withdraw Funds Button', 'Opens modal to record taking money out'],
      ['Progress Chart', 'Donut chart shows visual progress'],
      ['Remaining Amount Calculation', 'Accurately displays amount left to save'],
      ['Required Monthly Savings', 'Calculates amount needed per month to hit deadline'],
      ['Mark as Achieved', 'Manually completing goal moves it to completed list'],
      ['Delete Goal', 'Prompts confirmation and removes goal'],
      ['Share Milestone', 'Can share 50% or 100% completion graphic']
    ],
    'GoalProgressPage': [
      ['Milestone Confetti', 'Triggers confetti animation when a milestone is hit'],
      ['Timeline View', 'Shows chronological history of progress'],
      ['Projection Line', 'Chart predicts when goal will be met at current rate'],
      ['Adjust Target Prompt', 'Suggests lowering target if consistently missing'],
      ['Adjust Deadline Prompt', 'Suggests extending deadline if behind'],
      ['Linked Account Sync', 'Auto-updates progress if linked to a savings account'],
      ['Streak Tracking', 'Shows number of consecutive months contributed'],
      ['Motivational Quote', 'Displays financial motivation snippet'],
      ['Progress Sharing', 'Generates shareable progress card'],
      ['Offline Progress Update', 'Queues contribution for sync when offline']
    ],
    'EditGoalPage': [
      ['Valid Edit Save', 'Changes are saved and reflected in goal details'],
      ['Increase Target Amount', 'Progress percentage recalculates correctly'],
      ['Decrease Target Amount', 'Can mark goal as complete if new target is met'],
      ['Change Deadline', 'Required monthly savings recalculates correctly'],
      ['Change Goal Icon', 'Updates the visual icon for the goal'],
      ['Rename Goal', 'Name updates successfully in all views'],
      ['Cancel Edit', 'Discarding changes reverts to original values'],
      ['Invalid Deadline Edit', 'Cannot set deadline to the past'],
      ['Amount Less Than Saved', 'Warns if new target is less than currently saved'],
      ['Offline Edit', 'Edits are queued for network sync']
    ]
  },
  'AI Assistant': {
    'ChatPage': [
      ['Send Message', 'User can send a query and receive an AI response'],
      ['Empty Message', 'Send button is disabled when input is empty'],
      ['Long Message', 'Input field expands and handles long text paragraphs'],
      ['Special Characters', 'Successfully processes messages with emojis and symbols'],
      ['AI Response Display', 'Markdown and lists in AI response render correctly'],
      ['Chat History', 'Previous messages are loaded when re-opening chat'],
      ['Clear Chat', 'User can delete the current conversation history'],
      ['Network Failure During Chat', 'Displays "Failed to send" with retry option'],
      ['Retry Message', 'Tapping retry successfully sends the failed message'],
      ['Multiple Consecutive Messages', 'Can queue multiple messages while waiting for AI']
    ],
    'SuggestionsPage': [
      ['View Prompts', 'Displays a list of clickable suggested questions'],
      ['Tap Suggestion', 'Tapping a suggestion populates and sends it to Chat'],
      ['Category Filtering', 'Can filter suggestions by Budget, Debt, or Invest'],
      ['Dynamic Refresh', 'Suggestions change based on recent user activity'],
      ['Search Suggestions', 'Can search the library of AI prompts'],
      ['Save Favorite Prompt', 'Can bookmark a useful prompt for later'],
      ['Empty Search', 'Shows "No results" for unmatched searches'],
      ['Contextual Prompts', 'Shows specific prompts if user is over budget'],
      ['Voice Input', 'Microphone button initiates speech-to-text prompt'],
      ['Offline Suggestions', 'Shows cached prompts but warns AI is offline']
    ],
    'BudgetRecommendationPage': [
      ['Generate Plan', 'AI generates a complete budget plan based on income'],
      ['Apply Plan', 'Tapping apply overwrites current budget settings'],
      ['Customize Plan', 'User can manually tweak AI suggested limits'],
      ['Reject Plan', 'Discarding returns to previous budget state'],
      ['Regenerate Plan', 'Requesting a new plan provides alternate numbers'],
      ['Expense Categorization', 'AI successfully groups historical expenses'],
      ['Savings Allocation', 'Ensures 20% savings rule is recommended'],
      ['Debt Repayment Strategy', 'Recommends avalanche or snowball method'],
      ['Explanation Tooltips', 'Tapping "Why?" explains the AI\'s reasoning'],
      ['Print Plan', 'Generates a PDF version of the AI budget plan']
    ]
  },
  'Profile & Settings': {
    'ProfilePage': [
      ['View Profile Details', 'Displays user name, email, and member since date'],
      ['Avatar Display', 'Loads user profile picture or initials fallback'],
      ['Navigate to Edit Profile', 'Edit button opens the Edit Profile screen'],
      ['Account Tier Status', 'Shows Free or Premium subscription status'],
      ['Log Out Action', 'Prompts confirmation and logs user out'],
      ['Data Export Request', 'Triggers a GDPR data export email'],
      ['Delete Account Link', 'Navigates to the account deletion flow'],
      ['Pull to Refresh', 'Updates profile data from server'],
      ['Statistic Summary', 'Shows total transactions logged milestone'],
      ['Offline Profile', 'Displays cached profile data when offline']
    ],
    'EditProfilePage': [
      ['Update Name', 'Saving new name reflects immediately in Profile'],
      ['Update Phone Number', 'Formats and saves new phone number'],
      ['Change Avatar', 'Can upload new image from camera roll'],
      ['Remove Avatar', 'Deleting avatar reverts to initials fallback'],
      ['Invalid Email Edit', 'Prevents changing to an invalid email format'],
      ['Empty Name Validation', 'Prevents saving with an empty name field'],
      ['Cancel Edits', 'Discarding returns to profile without saving'],
      ['Image Size Limit', 'Rejects avatar uploads larger than 5MB'],
      ['Unsaved Changes Prompt', 'Warns user if backing out with unsaved edits'],
      ['Offline Edit', 'Queues profile updates for network sync']
    ],
    'SettingsPage': [
      ['Navigate to Security', 'Tapping Security opens security settings'],
      ['Navigate to Preferences', 'Tapping Preferences opens app preferences'],
      ['Navigate to Notifications', 'Tapping Notifications opens alert settings'],
      ['Theme Toggle', 'Switching to Dark Mode updates app theme immediately'],
      ['Language Selection', 'Changing language updates UI text instantly'],
      ['Currency Change', 'Updating base currency recalculates dashboard'],
      ['About Section', 'Displays Terms of Service and Privacy Policy links'],
      ['App Version', 'Displays current build number'],
      ['Rate App', 'Triggers native app store rating prompt'],
      ['Contact Support', 'Opens email client with pre-filled diagnostic info']
    ],
    'SecurityPage': [
      ['Change Password', 'Navigates to password change flow'],
      ['Enable Biometrics', 'Toggling FaceID/TouchID prompts native auth'],
      ['Disable Biometrics', 'Disabling removes biometric login requirement'],
      ['Two-Factor Auth Toggle', 'Initiates 2FA setup process'],
      ['Active Sessions', 'Displays list of devices logged into the account'],
      ['Revoke Session', 'Logging out a specific device works'],
      ['PIN Code Setup', 'Allows setting a 4-digit fallback app PIN'],
      ['Auto-Lock Timer', 'Can set app to lock after 1, 5, or 15 minutes'],
      ['Privacy Screen Blur', 'Toggling blurs app preview in OS app switcher'],
      ['Delete Account', 'Initiates secure account deletion process']
    ],
    'PreferencesPage': [
      ['First Day of Week', 'Changing to Monday updates all calendars/charts'],
      ['Default Dashboard View', 'Can set default tab to Insights instead of Dashboard'],
      ['Hide Decimal Places', 'Toggling removes cents from all displays'],
      ['Compact List View', 'Toggling reduces padding in transaction lists'],
      ['Smart Categorization', 'Toggle enables AI auto-categorizing expenses'],
      ['Monthly Start Date', 'Can set budget month to start on custom date (e.g., 15th)'],
      ['Default Currency', 'Changing updates default for new transactions'],
      ['Data Sync WiFi Only', 'Toggle prevents syncing over cellular data'],
      ['Haptic Feedback', 'Toggling disables physical vibrations on buttons'],
      ['Reset Preferences', 'Button restores all settings to default']
    ],
    'HelpPage': [
      ['Search FAQs', 'Searching "password" returns relevant help articles'],
      ['Expand FAQ Accordion', 'Tapping a question reveals the answer'],
      ['Video Tutorials', 'Tapping a tutorial plays the embedded video'],
      ['Live Chat Support', 'Initiates chat with support agent'],
      ['Submit Support Ticket', 'Form submits successfully with attachments'],
      ['Report a Bug', 'Bug report form captures device info and sends'],
      ['Community Forum Link', 'Opens external community page in browser'],
      ['Empty Search Results', 'Shows "No articles found" for gibberish search'],
      ['Offline Help', 'Locally cached FAQs are still readable'],
      ['Call Support', 'Tapping phone number initiates phone dialer']
    ],
    'NotificationsPage': [
      ['Enable Push Notifications', 'Prompts OS permission and enables'],
      ['Daily Reminder Toggle', 'Toggling enables 8 PM transaction reminder'],
      ['Large Transaction Alert', 'Can set threshold for large expense alerts'],
      ['Budget Exceeded Alert', 'Toggling enables alerts when budget hits 100%'],
      ['Weekly Summary Notification', 'Enables Sunday morning report push'],
      ['Bill Due Reminder', 'Can set reminder for 2 days before recurring expense'],
      ['Email Notifications', 'Toggling syncs preference with backend'],
      ['Marketing Emails', 'Can opt out of promotional newsletters'],
      ['In-App Badges', 'Toggling removes red unread dots from navigation'],
      ['Pause All Notifications', 'Can temporarily mute alerts for 24 hours']
    ]
  }
};

export const testCases = [];

for (const [moduleName, screens] of Object.entries(screenScenarios)) {
  for (const [screen, scenarios] of Object.entries(screens)) {
    let count = 1;
    for (const [name, expectedResult] of scenarios) {
      const screenCode = screen.toUpperCase().replace('PAGE', '').replace('SCREEN', '');
      const id = `TC-MOBILE-${screenCode}-${String(count).padStart(3, '0')}`;
      
      testCases.push({
        id,
        module: moduleName,
        screen: screen,
        name: name,
        expectedResult: expectedResult,
        status: 'Pending',
        time: 0
      });
      count++;
    }
  }
}
