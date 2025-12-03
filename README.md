# ✨ Multi Dashboard MVP

**専用ワークスペース**

1ページで複数の機能（ポモドーロタイマー、音楽プレイヤー、GitHub情報、天気）をまとめて確認できるダッシュボード。

---

## 機能概要

### ポモドーロタイマー
- **作業時間**: 25分 / **休憩時間**: 5分の自動切り替え
- 再生 / 一時停止 / リセット機能
- 現在のモード（作業 / 休憩）を視覚的に表示

### 音楽プレイヤー
- 学習用BGM 4曲をプリセット
- 再生 / 一時停止 / 前後の曲に切り替え
- アルバムアート表示
- トラック情報（曲名、アーティスト、長さ）表示

### GitHub カード
- 複数ユーザーの情報を切り替え表示
- ユーザープロフィール（フォロワー数、リポジトリ数など）
- トップリポジトリの詳細（スター数、フォーク数、言語）
- プロフィールへの直接リンク

### 天気カード
- 複数都市の天気情報を切り替え表示
- 気温 / 体感気温 / 湿度 / 風速
- 天気アイコン（晴れ、雨、曇り）表示

---

## プロジェクト構造

```
multi-dashboard/
├── docker-compose.yml              # Docker 設定
├── Dockerfile                      # Docker イメージ定義
├── .dockerignore                   # Docker ビルド除外
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
│
└── src/
    ├── features/                   ← 機能ごと
    │   ├── pomodoro/
    │   │   ├── components/
    │   │   │   └── PomodoroTimer.tsx
    │   │   ├── containers/
    │   │   │   └── PomodoroContainer.tsx
    │   │   ├── hooks/
    │   │   │   └── usePomodoro.ts
    │   │   ├── styles/
    │   │   │   └── pomodoro.css
    │   │   ├── types/
    │   │   │   └── index.ts
    │   │   ├── data/
    │   │   │   └── mockTracks.ts
    │   │   └── index.ts
    │   │
    │   ├── music/
    │   │   ├── components/
    │   │   │   └── MusicPlayer.tsx
    │   │   ├── containers/
    │   │   │   └── MusicContainer.tsx
    │   │   ├── hooks/
    │   │   │   └── useMusicSelector.ts
    │   │   ├── styles/
    │   │   │   └── music.css
    │   │   ├── types/
    │   │   │   └── index.ts
    │   │   ├── data/
    │   │   │   └── mockTracks.ts
    │   │   └── index.ts
    │   │
    │   ├── github/
    │   │   ├── components/
    │   │   │   └── GitHubCard.tsx
    │   │   ├── containers/
    │   │   │   └── GitHubContainer.tsx
    │   │   ├── hooks/
    │   │   │   └── useGitHubSelector.ts
    │   │   ├── styles/
    │   │   │   └── github.css
    │   │   ├── types/
    │   │   │   └── index.ts
    │   │   ├── data/
    │   │   │   └── mockGitHubUsers.ts
    │   │   └── index.ts
    │   │
    │   └── weather/
    │       ├── components/
    │       │   └── WeatherCard.tsx
    │       ├── containers/
    │       │   └── WeatherContainer.tsx
    │       ├── hooks/
    │       │   └── useWeatherSelector.ts
    │       ├── styles/
    │       │   └── weather.css
    │       ├── types/
    │       │   └── index.ts
    │       ├── data/
    │       │   └── mockWeatherData.ts
    │       └── index.ts
    │
    ├── pages/                      ← ページ / 画面
    │   └── dashboard/
    │       ├── components/
    │       │   ├── DashboardPage.tsx
    │       │   ├── Sidebar.tsx
    │       │   ├── CenterSection.tsx
    │       │   ├── RightSection.tsx
    │       │   └── DashboardLayout.tsx
    │       ├── containers/
    │       │   └── DashboardContainer.tsx
    │       ├── hooks/
    │       │   └── useDashboardState.ts
    │       ├── styles/
    │       │   └── dashboard.css
    │       ├── types/
    │       │   └── index.ts
    │       └── index.ts
    │
    ├── shared/                     ← 全機能で共有
    │   ├── components/
    │   │   ├── Header.tsx
    │   │   └── Footer.tsx
    │   ├── hooks/
    │   └── utils/
    │
    ├── styles/                     ← グローバルスタイル
    │   └── global.css
    │
    ├── types/                      ← グローバル型定義
    │   └── index.ts
    │
    ├── App.tsx                     ← ルートコンポーネント
    ├── main.tsx
    └── index.css                   ← Tailwind v4.0 CSS
```