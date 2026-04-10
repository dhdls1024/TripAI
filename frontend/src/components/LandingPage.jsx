import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

// 여행 취향 선택지 목록 (상수로 정의)
const TRAVEL_OPTIONS = [
  { icon: '🌿', title: '힐링 & 자연', desc: '조용한 자연 속에서 쉬고 싶어요' },
  { icon: '🍽️', title: '맛집 투어', desc: '현지 음식과 카페를 탐방하고 싶어요' },
  { icon: '🏛️', title: '역사 & 문화', desc: '새로운 것을 배우고 싶어요' },
  { icon: '🎉', title: '액티비티', desc: '신나는 활동을 즐기고 싶어요' },
]

// 앱 주요 기능 소개 목록
const FEATURES = [
  {
    icon: '✨',
    title: 'AI 맞춤 일정 생성',
    desc: '취향과 예산을 분석해 최적의 여행 일정을 몇 초 만에 만들어 드려요.',
  },
  {
    icon: '👥',
    title: '그룹 플래닝',
    desc: '친구들과 함께 투표하고 역할을 나눠 갈등 없이 여행을 준비해요.',
  },
  {
    icon: '💰',
    title: '예산 관리',
    desc: 'AI가 실시간으로 지출을 추적하고 초과 위험을 미리 알려줘요.',
  },
  {
    icon: '🗺️',
    title: '스마트 동선',
    desc: '이동 시간을 최소화하는 최적 경로와 일정 충돌을 자동으로 조정해요.',
  },
]

// 떠다니는 프리뷰 카드 컴포넌트 (히어로 배경 장식용)
function FloatingCard({ className, children }) {
  return (
    <div
      className={`absolute backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl px-4 py-3 text-white shadow-lg ${className}`}
    >
      {children}
    </div>
  )
}

// 취향 선택 옵션 카드 컴포넌트
function TravelOptionCard({ icon, title, desc, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      // 선택 여부에 따라 테두리 색상 변경
      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer
        ${selected
          ? 'border-blue-500 bg-blue-50'
          : 'border-border bg-card hover:border-blue-300 hover:bg-blue-50/30'
        }`}
    >
      <span className="text-2xl w-10 text-center">{icon}</span>
      <div>
        <div className="font-bold text-foreground text-sm">{title}</div>
        <div className={`text-xs mt-0.5 ${selected ? 'text-blue-500' : 'text-muted-foreground'}`}>
          {desc}
        </div>
      </div>
    </button>
  )
}

// 기능 소개 카드 컴포넌트
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div className="font-bold text-foreground">{title}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
    </div>
  )
}

export default function LandingPage() {
  // 선택된 여행 취향 인덱스 (기본: 힐링)
  const [selectedOption, setSelectedOption] = useState(0)
  // 히어로 섹션 진입 애니메이션 트리거용
  const [visible, setVisible] = useState(false)

  // 마운트 직후 페이드인 애니메이션 시작
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">

      {/* ─── 네비게이션 바 ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xl">✈</span>
          <span className="font-black text-lg tracking-tight text-foreground">트리파이</span>
        </div>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5">
          무료 시작
        </Button>
      </nav>

      {/* ─── 히어로 섹션 ─── */}
      {/* 파란 배경 전체 히어로 블록 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 pt-24 pb-0">

        {/* 배경 원형 장식 — 시각적 깊이감 부여 */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* 메인 카피 영역 */}
        <div
          className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-16 flex flex-col items-center text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-6">
            <span>✨</span>
            <span>AI 통합 여행 플래너</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            AI가 만드는<br />
            <span className="text-blue-100">나만의 여행</span>
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-md leading-relaxed mb-8">
            취향만 말해주세요.<br />
            나머지는 AI가 다 해드려요.
          </p>

          {/* CTA 버튼 그룹 */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-2xl px-8 py-6 text-base shadow-lg"
            >
              지금 무료로 시작하기 →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 rounded-2xl px-8 py-6 text-base"
            >
              데모 보기
            </Button>
          </div>
        </div>

        {/* ─── 앱 미리보기 카드 (히어로 하단 플로팅) ─── */}
        <div
          className="relative z-10 max-w-sm mx-auto px-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >
          {/* 모바일 앱 프리뷰 카드 */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl p-5 shadow-2xl">

            {/* 떠다니는 장식 카드들 */}
            <FloatingCard className="floating-card-1 -top-5 -right-4 text-xs">
              <div className="text-white/70 text-[10px] mb-0.5">AI 추천</div>
              <div className="font-bold text-sm">제주 힐링 3박 4일</div>
            </FloatingCard>

            <FloatingCard className="floating-card-2 -bottom-4 -left-4 text-xs">
              <div className="text-white/80 text-[10px]">그룹 4명 · 예산 50만원</div>
            </FloatingCard>

            {/* 카드 헤더 */}
            <div className="text-white/70 text-xs mb-1">AI 추천 · 제주도</div>
            <div className="text-white font-bold text-lg mb-3 leading-snug">
              3박 4일 힐링 여행 →
            </div>

            {/* 여행 메타 정보 */}
            <div className="flex flex-wrap gap-3 text-white/90 text-xs mb-4">
              <span>✈️ 3.15~3.18</span>
              <span>👥 4명</span>
              <span>💰 50만원</span>
            </div>

            {/* 준비 진행률 바 */}
            <div className="space-y-1">
              <div className="flex justify-between text-white/70 text-[11px]">
                <span>준비 완료</span>
                <span>85%</span>
              </div>
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: '85%' }}
                />
              </div>
            </div>

            {/* AI 조언 버블 */}
            <div className="mt-4 bg-blue-500/50 rounded-xl p-3 text-white/90 text-xs leading-relaxed">
              <span className="font-bold text-white">트리파이 AI</span>
              <span className="ml-1 text-white/60 text-[10px]">방금</span>
              <p className="mt-1">
                3일차 일정이 빡빡해요. 성산일출봉을 4일차 오전으로 이동하면 더 여유로울 것 같아요 ✨
              </p>
            </div>
          </div>
        </div>

        {/* 히어로 하단 물결 모양 — 배경 전환 자연스럽게 */}
        <div className="h-16 mt-8" style={{
          background: 'linear-gradient(to bottom, transparent, var(--background))',
        }} />
      </section>

      {/* ─── 취향 선택 섹션 ─── */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
            어떤 여행을 원하세요?
          </h2>
          <p className="text-muted-foreground">
            취향을 선택하면 AI가 맞춤 일정을 만들어요
          </p>
        </div>

        {/* 취향 선택 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {TRAVEL_OPTIONS.map((opt, idx) => (
            <TravelOptionCard
              key={idx}
              {...opt}
              selected={selectedOption === idx}
              onClick={() => setSelectedOption(idx)}
            />
          ))}
        </div>

        {/* 선택 후 CTA */}
        <Button
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl py-6 text-base shadow-lg transition-transform duration-150 active:scale-95"
        >
          AI 일정 만들기 →
        </Button>
      </section>

      {/* ─── 기능 소개 섹션 ─── */}
      <section className="bg-muted/40 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
              왜 트리파이인가요?
            </h2>
            <p className="text-muted-foreground">
              AI가 여행의 모든 과정을 함께해요
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f, idx) => (
              <FeatureCard key={idx} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 하단 CTA 섹션 ─── */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-4xl mb-4">✈</div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            지금 바로 여행을 시작해보세요
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            무료로 사용할 수 있어요. 카드 등록 없이 바로 AI 일정을 만들어보세요.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-2xl px-10 py-6 text-base shadow-lg"
          >
            무료로 시작하기 →
          </Button>
        </div>
      </section>

      {/* ─── 푸터 ─── */}
      <footer className="border-t py-8 px-6 text-center text-muted-foreground text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span>✈</span>
          <span className="font-bold text-foreground">트리파이</span>
        </div>
        <p>AI 통합 여행 플래너 · 2024</p>
      </footer>

    </div>
  )
}
