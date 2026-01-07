import { defineConfig } from 'vite';
import { typescriptConfig, appComponentsPlugin } from '@nativescript/vite';

export default defineConfig(({ mode }) => {
  const config = typescriptConfig({ mode });
  
  // Register custom Android Activity and Application classes
  config.plugins!.push(
    appComponentsPlugin({
      appComponents: [
        './app/custom-activity.android.ts',
        './app/custom-application.android.ts'
      ],
      platform: 'android'
    })
  );
  
  return config;
});