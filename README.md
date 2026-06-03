# 의상 디자이너 자기소개 사이트

**라이브 사이트:** https://rainy-gittech.github.io/

`자기소개서.md` 내용을 바탕으로 한 Dark Fluid 스타일 정적 페이지입니다. HTML, CSS, JavaScript만 사용합니다.

## 로컬에서 보기

### 방법 1: 로컬 서버 (권장)

`site` 폴더에서 실행합니다.

```bash
cd site
npx --yes serve .
```

브라우저에서 표시된 주소(보통 `http://localhost:3000`)로 접속합니다.

### 방법 2: VS Code / Cursor

**Live Server** 확장으로 `index.html`을 연 뒤 "Go Live"를 사용할 수 있습니다.

### 방법 3: 파일 직접 열기

`index.html`을 더블클릭해 열 수 있으나, 일부 브라우저에서는 폰트·경로 동작이 제한될 수 있습니다.

## 제출 전 수정할 곳

`index.html`에서 아래 플레이스홀더를 본인 정보로 바꿉니다.

- `[이름]`
- `[이메일]` / `[전화번호 또는 이메일]`
- `[포트폴리오 URL]`
- `[YYYY년 MM월 DD일]`

## GitHub Pages 배포

### A. `/site` 폴더를 Pages 소스로 (권장)

1. 저장소를 GitHub에 push합니다.
2. **Settings → Pages → Build and deployment**
3. **Source:** Deploy from a branch
4. **Branch:** `main` (또는 사용 중인 브랜치), **Folder:** `/site`
5. 저장 후 `https://<username>.github.io/<repo>/` 에서 확인합니다.

### B. 저장소 루트에 배포

`site` 폴더 **안의 파일**(`index.html`, `css/`, `js/`)을 저장소 **루트**로 옮기고 Pages 소스를 `/ (root)`로 설정합니다.

## Work 섹션 이미지

`assets/images/`의 사진은 [Unsplash](https://unsplash.com)에서 다운로드한 무료 이미지입니다.

| 파일 | 주제 | Unsplash |
|------|------|----------|
| `work-1-collection.jpg` | 패션쇼 런웨이 | [EvjmSg1xurI](https://unsplash.com/photos/EvjmSg1xurI) |
| `work-2-brand.jpg` | 매장 의류 라인 | [roHpoNuME1w](https://unsplash.com/photos/roHpoNuME1w) |
| `work-3-planning.jpg` | 드레스 폼 스케치 | [WBgPMst9toY](https://unsplash.com/photos/WBgPMst9toY) |
| `work-4-quality.jpg` | 재봉 도구·품질 | [0tBvf_HJ34c](https://unsplash.com/photos/0tBvf_HJ34c) |

본인 작업물로 교체할 때는 같은 파일명으로 `assets/images/`에 덮어쓰면 됩니다.

## 파일 구조

```
site/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── work-1-collection.jpg
│       ├── work-2-brand.jpg
│       ├── work-3-planning.jpg
│       └── work-4-quality.jpg
└── README.md
```

모든 경로는 상대 경로이므로 GitHub Pages 서브경로 배포에도 그대로 동작합니다.

## 디자인 참고

프로젝트 스킬 `.cursor/skills/dark-fluid-web-design` — Adri Fluid Demo 구조 + 다크 미니멀 토큰.
