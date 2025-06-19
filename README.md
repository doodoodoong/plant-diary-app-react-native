# 🌱 Plant Diary App

식물 관리와 성장 기록을 위한 React Native 모바일 애플리케이션입니다.

## 📱 주요 기능

- 식물 등록 및 관리
- 성장 기록 및 사진 저장
- 물주기, 비료주기 알림
- 식물 관리 캘린더
- 성장 통계 및 분석

## 🛠 기술 스택

- **Framework**: React Native with Expo
- **Router**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Styling**: StyleSheet
- **State Management**: React Hooks

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm start
```

### 3. 앱 실행

개발 서버 실행 후 다음 옵션 중 선택:

- **iOS 시뮬레이터**: `i` 키 입력 또는 `npm run ios`
- **Android 에뮬레이터**: `a` 키 입력 또는 `npm run android`
- **웹 브라우저**: `w` 키 입력 또는 `npm run web`
- **Expo Go**: QR 코드 스캔 (실제 디바이스)

## 📁 프로젝트 구조

```
PlantDiaryApp/
├── app/                    # 메인 앱 디렉토리 (file-based routing)
│   ├── index.tsx          # 홈 화면
│   └── _layout.tsx        # 루트 레이아웃
├── assets/                # 이미지, 폰트 등 정적 파일
├── components/            # 재사용 가능한 컴포넌트
├── hooks/                 # 커스텀 훅
├── constants/             # 상수 정의
└── app.json              # Expo 설정 파일
```

## 🔧 개발 스크립트

```bash
npm start          # 개발 서버 시작
npm run android    # Android 앱 실행
npm run ios        # iOS 앱 실행
npm run web        # 웹 버전 실행
npm run lint       # 코드 린팅
```

## 📦 빌드 설정

### iOS
- Bundle Identifier: `com.plantdiary.app`
- iOS 최소 버전: 13.0 이상

### Android
- Package Name: `com.plantdiary.app`
- 필요 권한: `INTERNET`

## 🔗 유용한 링크

- [Expo 문서](https://docs.expo.dev/)
- [React Native 문서](https://reactnative.dev/)
- [Expo Router 문서](https://docs.expo.dev/router/introduction/)
