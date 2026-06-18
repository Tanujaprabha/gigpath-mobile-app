const screensByModule = {
  'Shared & Onboarding': ['SplashScreen', 'WelcomeScreen', 'NotFoundPage'],
  'Authentication': ['LoginPage', 'SignupPage', 'ForgotPasswordPage', 'ResetPasswordPage'],
  'Dashboard': ['DashboardPage'],
  'Finance': ['TransactionListPage', 'AddTransactionPage', 'TransactionDetailPage', 'EditTransactionPage', 'CategoryBreakdownPage', 'MonthlyReportPage', 'RecurringExpensesPage', 'AddRecurringExpensePage'],
  'Insights': ['InsightsOverviewPage', 'WeeklyReportPage', 'CashFlowPage', 'PredictionsPage', 'FinancialHealthPage'],
  'Goals': ['GoalsListPage', 'AddGoalPage', 'GoalDetailPage', 'GoalProgressPage', 'EditGoalPage'],
  'AI Assistant': ['ChatPage', 'SuggestionsPage', 'BudgetRecommendationPage'],
  'Profile & Settings': ['ProfilePage', 'EditProfilePage', 'SettingsPage', 'SecurityPage', 'PreferencesPage', 'HelpPage', 'NotificationsPage']
};

const scenarioTemplates = [
  { name: 'Functional Validation', expectedResult: 'Core functionality operates successfully' },
  { name: 'Negative Input Handling', expectedResult: 'Displays appropriate error messages' },
  { name: 'Empty Fields Validation', expectedResult: 'Validation errors highlight required fields' },
  { name: 'Landscape Mode Scaling', expectedResult: 'UI elements scale and position correctly' },
  { name: 'Keyboard Interactions', expectedResult: 'Keyboard focus moves logically and submits' },
  { name: 'App Background to Foreground', expectedResult: 'Screen state and inputs are preserved' },
  { name: 'Offline Mode Attempt', expectedResult: 'Shows offline toast or fallback UI' },
  { name: 'Navigation Gestures', expectedResult: 'Swipe or touch gestures navigate smoothly' },
  { name: 'Device Rotation Persistence', expectedResult: 'Input fields retain entered text without layout break' },
  { name: 'Network Recovery', expectedResult: 'Retries actions automatically after reconnecting' }
];

export const testCases = [];

for (const [moduleName, screens] of Object.entries(screensByModule)) {
  for (const screen of screens) {
    let count = 1;
    for (const template of scenarioTemplates) {
      const screenCode = screen.toUpperCase().replace('PAGE', '').replace('SCREEN', '');
      const id = `TC-MOBILE-${screenCode}-${String(count).padStart(3, '0')}`;
      
      testCases.push({
        id,
        module: moduleName,
        screen: screen,
        name: `${screen} - ${template.name}`,
        expectedResult: template.expectedResult,
        status: 'Pending',
        time: 0
      });
      count++;
    }
  }
}
