"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from "motion/react";
import { useState, useRef, useEffect, memo } from "react";

// Grid cell data structure
interface CellData {
  row: number;
  col: number;
  opacity: number;
}

// Generate all grid cells
const generateGridCells = (): CellData[] => {
  const cells: CellData[] = [];

  // Row 1
  cells.push(
    { row: 1, col: 1, opacity: 0.05 }, { row: 1, col: 2, opacity: 0.1 }, { row: 1, col: 3, opacity: 0.1 },
    { row: 1, col: 4, opacity: 0.1 }, { row: 1, col: 5, opacity: 0.1 }, { row: 1, col: 6, opacity: 0.1 },
    { row: 1, col: 7, opacity: 0.1 }, { row: 1, col: 8, opacity: 0.1 }, { row: 1, col: 9, opacity: 0.1 },
    { row: 1, col: 10, opacity: 0.1 }, { row: 1, col: 11, opacity: 0.1 }, { row: 1, col: 12, opacity: 0.1 },
    { row: 1, col: 13, opacity: 0.1 }, { row: 1, col: 14, opacity: 0.1 }, { row: 1, col: 15, opacity: 0.1 },
    { row: 1, col: 16, opacity: 0.1 }, { row: 1, col: 17, opacity: 0.1 }, { row: 1, col: 18, opacity: 0.1 },
    { row: 1, col: 19, opacity: 0.1 }, { row: 1, col: 20, opacity: 0.1 }, { row: 1, col: 21, opacity: 0.1 },
    { row: 1, col: 22, opacity: 0.05 }
  );

  // Row 2
  cells.push(
    { row: 2, col: 1, opacity: 0.05 }, { row: 2, col: 2, opacity: 0.1 }, { row: 2, col: 3, opacity: 0.1 },
    { row: 2, col: 4, opacity: 0.2 }, { row: 2, col: 5, opacity: 0.2 }, { row: 2, col: 6, opacity: 0.2 },
    { row: 2, col: 7, opacity: 0.2 }, { row: 2, col: 8, opacity: 0.2 }, { row: 2, col: 9, opacity: 0.2 },
    { row: 2, col: 10, opacity: 0.2 }, { row: 2, col: 11, opacity: 0.2 }, { row: 2, col: 12, opacity: 0.2 },
    { row: 2, col: 13, opacity: 0.2 }, { row: 2, col: 14, opacity: 0.2 }, { row: 2, col: 15, opacity: 0.2 },
    { row: 2, col: 16, opacity: 0.2 }, { row: 2, col: 17, opacity: 0.2 }, { row: 2, col: 18, opacity: 0.2 },
    { row: 2, col: 19, opacity: 0.2 }, { row: 2, col: 20, opacity: 0.1 }, { row: 2, col: 21, opacity: 0.1 },
    { row: 2, col: 22, opacity: 0.05 }
  );

  // Row 3
  cells.push(
    { row: 3, col: 1, opacity: 0.05 }, { row: 3, col: 2, opacity: 0.1 }, { row: 3, col: 3, opacity: 0.1 },
    { row: 3, col: 4, opacity: 0.3 }, { row: 3, col: 5, opacity: 0.3 }, { row: 3, col: 6, opacity: 0.3 },
    { row: 3, col: 7, opacity: 0.3 }, { row: 3, col: 8, opacity: 0.3 }, { row: 3, col: 9, opacity: 0.3 },
    { row: 3, col: 10, opacity: 0.3 }, { row: 3, col: 11, opacity: 0.3 }, { row: 3, col: 12, opacity: 0.3 },
    { row: 3, col: 13, opacity: 0.3 }, { row: 3, col: 14, opacity: 0.3 }, { row: 3, col: 15, opacity: 0.3 },
    { row: 3, col: 16, opacity: 0.3 }, { row: 3, col: 17, opacity: 0.3 }, { row: 3, col: 18, opacity: 0.3 },
    { row: 3, col: 19, opacity: 0.2 }, { row: 3, col: 20, opacity: 0.1 }, { row: 3, col: 21, opacity: 0.1 },
    { row: 3, col: 22, opacity: 0.05 }
  );

  // Rows 4-8
  for (let row = 4; row <= 8; row++) {
    cells.push(
      { row, col: 1, opacity: 0.05 }, { row, col: 2, opacity: 0.1 }, { row, col: 3, opacity: 0.1 },
      { row, col: 4, opacity: 0.3 }, { row, col: 5, opacity: 0.3 }, { row, col: 6, opacity: 0.3 },
      { row, col: 7, opacity: 0.3 }, { row, col: 8, opacity: 0.3 }, { row, col: 9, opacity: 0.3 },
      { row, col: 10, opacity: 0.3 }, { row, col: 11, opacity: 0.3 }, { row, col: 12, opacity: 0.3 },
      { row, col: 13, opacity: 0.3 }, { row, col: 14, opacity: 0.3 }, { row, col: 15, opacity: 0.3 },
      { row, col: 16, opacity: 0.3 }, { row, col: 17, opacity: 0.3 }, { row, col: 18, opacity: 0.3 },
      { row, col: 19, opacity: 0.2 }, { row, col: 20, opacity: 0.1 }, { row, col: 21, opacity: 0.1 },
      { row, col: 22, opacity: 0.05 }
    );
  }

  // Row 9
  cells.push(
    { row: 9, col: 1, opacity: 0.05 }, { row: 9, col: 2, opacity: 0.1 }, { row: 9, col: 3, opacity: 0.1 },
    { row: 9, col: 4, opacity: 0.2 }, { row: 9, col: 5, opacity: 0.2 }, { row: 9, col: 6, opacity: 0.2 },
    { row: 9, col: 7, opacity: 0.2 }, { row: 9, col: 8, opacity: 0.2 }, { row: 9, col: 9, opacity: 0.2 },
    { row: 9, col: 10, opacity: 0.2 }, { row: 9, col: 11, opacity: 0.2 }, { row: 9, col: 12, opacity: 0.2 },
    { row: 9, col: 13, opacity: 0.2 }, { row: 9, col: 14, opacity: 0.2 }, { row: 9, col: 15, opacity: 0.2 },
    { row: 9, col: 16, opacity: 0.2 }, { row: 9, col: 17, opacity: 0.2 }, { row: 9, col: 18, opacity: 0.3 },
    { row: 9, col: 19, opacity: 0.3 }, { row: 9, col: 20, opacity: 0.1 }, { row: 9, col: 21, opacity: 0.1 },
    { row: 9, col: 22, opacity: 0.05 }
  );

  // Row 10
  cells.push(
    { row: 10, col: 1, opacity: 0.05 }, { row: 10, col: 2, opacity: 0.1 }, { row: 10, col: 3, opacity: 0.1 },
    { row: 10, col: 4, opacity: 0.1 }, { row: 10, col: 5, opacity: 0.1 }, { row: 10, col: 6, opacity: 0.1 },
    { row: 10, col: 7, opacity: 0.1 }, { row: 10, col: 8, opacity: 0.1 }, { row: 10, col: 9, opacity: 0.1 },
    { row: 10, col: 10, opacity: 0.1 }, { row: 10, col: 11, opacity: 0.1 }, { row: 10, col: 12, opacity: 0.1 },
    { row: 10, col: 13, opacity: 0.1 }, { row: 10, col: 14, opacity: 0.1 }, { row: 10, col: 15, opacity: 0.1 },
    { row: 10, col: 16, opacity: 0.1 }, { row: 10, col: 17, opacity: 0.1 }, { row: 10, col: 18, opacity: 0.1 },
    { row: 10, col: 19, opacity: 0.1 }, { row: 10, col: 20, opacity: 0.1 }, { row: 10, col: 21, opacity: 0.1 },
    { row: 10, col: 22, opacity: 0.05 }
  );

  return cells;
};

// Check if cell is in the text area
const isCellInTextArea = (row: number, col: number): boolean => {
  return row >= 3 && row <= 8 && col >= 5 && col <= 18;
};

// Define system clusters - each represents a platform/system to build
interface SystemCluster {
  id: string;
  name: string;
  nameAr: string;
  color: string;
  cells: string[];
}

const SYSTEM_CLUSTERS: SystemCluster[] = [
  {
    id: 'banking',
    name: 'Banking Platform',
    nameAr: 'منصة البنوك',
    color: '#C41E3A', // Oman Red
    cells: ['1-2', '1-3', '1-4', '2-2', '2-3', '2-4', '3-2', '3-3', '3-4'] // Top-left 3x3
  },
  {
    id: 'telecom',
    name: 'Telecom System',
    nameAr: 'نظام الاتصالات',
    color: '#009900', // Oman Green
    cells: ['1-19', '1-20', '1-21', '2-19', '2-20', '2-21', '3-19', '3-20', '3-21'] // Top-right 3x3
  },
  {
    id: 'government',
    name: 'Government Portal',
    nameAr: 'البوابة الحكومية',
    color: '#FFFFFF', // Oman White
    cells: ['9-10', '9-11', '9-12', '9-13', '10-10', '10-11', '10-12', '10-13'] // Bottom center: 2x4 block = 8 cells
  }
];

// MAGNIFICENT NEON with System Colors
interface GridCellProps {
  row: number;
  col: number;
  baseOpacity: number;
  isActivated: boolean;
  isCurrentHover: boolean;
  neighborGlow: number;
  systemColor?: string;
  isCompletedSystem: boolean;
  onHover: (row: number, col: number) => void;
  onLeave: () => void;
}

// Memoized cell - only re-renders when its own props change
const GridCell = memo(function GridCell({
  row,
  col,
  baseOpacity,
  isActivated,
  isCurrentHover,
  neighborGlow,
  systemColor,
  isCompletedSystem,
  onHover,
  onLeave
}: GridCellProps) {
  if (isCellInTextArea(row, col)) {
    return null;
  }

  const color = systemColor || '#009689';
  const isWhiteSystem = color === '#FFFFFF';

  // Helper to convert hex to rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Lightened glow tokens — keeps system identity, removes the haze
  const liftShadow = isWhiteSystem
    ? '0 0 10px 1px rgba(255, 255, 255, 0.45), 0 0 20px 3px rgba(255, 255, 255, 0.2)'
    : `0 0 10px 1px ${hexToRgba(color, 0.45)}, 0 0 20px 3px ${hexToRgba(color, 0.2)}`;
  const liftBorder = isWhiteSystem
    ? '1px solid rgba(255, 255, 255, 0.85)'
    : `1px solid ${hexToRgba(color, 0.6)}`;

  // COMPLETED SYSTEM - permanent glow
  if (isCompletedSystem) {
    return (
      <div
        className={`[grid-area:${row}_/_${col}] place-self-stretch rounded-[4px] shrink-0 relative cursor-pointer overflow-visible`}
        style={{
          backgroundColor: color,
          opacity: 0.95,
          transform: 'scale(1.04)',
          boxShadow: liftShadow,
          border: liftBorder,
          willChange: 'auto',
        }}
        onMouseEnter={() => onHover(row, col)}
        onMouseLeave={onLeave}
      />
    );
  }

  // STATIC activated state - NO ANIMATIONS, pure CSS
  if (isActivated) {
    return (
      <div
        className={`[grid-area:${row}_/_${col}] place-self-stretch rounded-[4px] shrink-0 relative cursor-pointer overflow-visible`}
        style={{
          backgroundColor: color,
          opacity: 0.95,
          transform: 'scale(1.04)',
          boxShadow: liftShadow,
          border: liftBorder,
          willChange: 'auto',
        }}
        onMouseEnter={() => onHover(row, col)}
        onMouseLeave={onLeave}
      />
    );
  }

  // Currently hovered
  if (isCurrentHover) {
    return (
      <div
        className={`[grid-area:${row}_/_${col}] place-self-stretch rounded-[4px] shrink-0 relative cursor-pointer overflow-visible`}
        style={{
          backgroundColor: color,
          opacity: 1,
          transform: 'scale(1.04)',
          boxShadow: liftShadow,
          border: liftBorder,
          willChange: 'transform',
        }}
        onMouseEnter={() => onHover(row, col)}
        onMouseLeave={onLeave}
      />
    );
  }

  // Default state with neighbor glow
  return (
    <div
      className={`[grid-area:${row}_/_${col}] place-self-stretch rounded-[4px] shrink-0 relative cursor-pointer overflow-visible transition-all duration-150`}
      style={{
        backgroundColor: '#2c2c2c',
        opacity: baseOpacity,
        boxShadow: neighborGlow > 0 ? `0 0 ${10 * neighborGlow}px ${systemColor ? hexToRgba(systemColor, neighborGlow * 0.35) : `rgba(0, 150, 137, ${neighborGlow * 0.35})`}` : 'none',
        willChange: neighborGlow > 0 ? 'box-shadow' : 'auto',
      }}
      onMouseEnter={() => onHover(row, col)}
      onMouseLeave={onLeave}
    />
  );
});

export function OmanContext() {
  const { language } = useLanguage();
  const t = translations[language];
  const [hoveredCells, setHoveredCells] = useState<Set<string>>(new Set());
  const [currentHover, setCurrentHover] = useState<string | null>(null);
  const [completedSystems, setCompletedSystems] = useState<Set<string>>(new Set());
  const [showCelebration, setShowCelebration] = useState(false);
  const cellTimersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const gridCells = generateGridCells();
  const allSystemsComplete = completedSystems.size === 3;

  // Check if a system is completed
  const checkSystemCompletion = (newHoveredCells: Set<string>) => {
    SYSTEM_CLUSTERS.forEach(system => {
      if (!completedSystems.has(system.id)) {
        const allCellsHovered = system.cells.every(cell => newHoveredCells.has(cell));
        if (allCellsHovered) {
          setCompletedSystems(prev => {
            const newSet = new Set(prev).add(system.id);
            // Trigger celebration when all 3 are complete
            if (newSet.size === 3) {
              setShowCelebration(true);
              setTimeout(() => setShowCelebration(false), 3000);
            }
            return newSet;
          });

          // Clear timers for completed system cells so they stay lit
          system.cells.forEach(cellKey => {
            const timer = cellTimersRef.current.get(cellKey);
            if (timer) {
              clearTimeout(timer);
              cellTimersRef.current.delete(cellKey);
            }
          });
        }
      }
    });
  };

  // Get system for a cell
  const getSystemForCell = (cellKey: string): SystemCluster | undefined => {
    return SYSTEM_CLUSTERS.find(system => system.cells.includes(cellKey));
  };

  const handleCellHover = (row: number, col: number) => {
    const cellKey = `${row}-${col}`;
    const system = getSystemForCell(cellKey);

    // Add to active cells
    const newHoveredCells = new Set(hoveredCells).add(cellKey);
    setHoveredCells(newHoveredCells);
    setCurrentHover(cellKey);

    // Check if this completes a system
    checkSystemCompletion(newHoveredCells);

    // Clear any existing timer for this cell
    const existingTimer = cellTimersRef.current.get(cellKey);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    // If cell is part of a completed system, don't set timer
    if (system && completedSystems.has(system.id)) {
      return;
    }

    // Set new timer to deactivate this cell after 3 seconds
    const timer = setTimeout(() => {
      setHoveredCells(prev => {
        const newSet = new Set(prev);
        newSet.delete(cellKey);
        return newSet;
      });
      cellTimersRef.current.delete(cellKey);
    }, 1000); // 1 second before fade back

    cellTimersRef.current.set(cellKey, timer);
  };

  const handleCellLeave = () => {
    setCurrentHover(null);
  };

  // Calculate neighbor glow for a cell
  const getNeighborGlow = (row: number, col: number): number => {
    if (!currentHover) return 0;
    const cellKey = `${row}-${col}`;
    const isActivated = hoveredCells.has(cellKey);
    const isCurrentHoverCell = currentHover === cellKey;

    if (isCurrentHoverCell || isActivated) return 0;

    const [hoveredRow, hoveredCol] = currentHover.split('-').map(Number);
    const dx = col - hoveredCol;
    const dy = row - hoveredRow;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= 1.5 ? Math.max(0, 1 - distance / 1.5) * 0.5 : 0;
  };

  useEffect(() => {
    const timers = cellTimersRef.current;
    return () => {
      // Clear all timers on unmount
      timers.forEach(timer => clearTimeout(timer));
      timers.clear();
      setHoveredCells(new Set());
      setCurrentHover(null);
      setCompletedSystems(new Set());
    };
  }, []);

  return (
    <section
      className="bg-[#1e1e1e] relative hidden md:flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '700px',
        padding: '80px 20px',
      }}
      aria-labelledby="oman-context-heading"
    >
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div
          className="gap-[12px] grid grid-cols-[repeat(22,_minmax(0px,_1fr))] grid-rows-[repeat(10,_minmax(0px,_1fr))] h-[613px] w-[1363px] max-w-full pointer-events-auto relative"
        >
          {gridCells.map((cell) => {
            const cellKey = `${cell.row}-${cell.col}`;
            const isActivated = hoveredCells.has(cellKey) && currentHover !== cellKey;
            const isCurrentHoverCell = currentHover === cellKey;
            const neighborGlow = getNeighborGlow(cell.row, cell.col);

            const system = getSystemForCell(cellKey);
            const isCompletedSystem = system ? completedSystems.has(system.id) : false;

            return (
              <GridCell
                key={cellKey}
                row={cell.row}
                col={cell.col}
                baseOpacity={cell.opacity}
                isActivated={isActivated}
                isCurrentHover={isCurrentHoverCell}
                neighborGlow={neighborGlow}
                systemColor={system?.color}
                isCompletedSystem={isCompletedSystem}
                onHover={handleCellHover}
                onLeave={handleCellLeave}
              />
            );
          })}

          {/* System Completion Labels */}
          {completedSystems.has('banking') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute top-[8%] left-[12%] pointer-events-none z-10"
            >
              <div className="bg-[rgba(196,30,58,0.92)] text-white px-3 py-1.5 rounded-md border border-[rgba(196,30,58,0.5)] backdrop-blur-sm"
                style={{
                  boxShadow: '0 0 8px rgba(196, 30, 58, 0.35), 0 0 16px rgba(196, 30, 58, 0.15)',
                }}
              >
                <div className="text-xs font-semibold tracking-wide">Banking</div>
              </div>
            </motion.div>
          )}

          {completedSystems.has('telecom') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute top-[8%] right-[12%] pointer-events-none z-10"
            >
              <div className="bg-[rgba(0,153,0,0.92)] text-white px-3 py-1.5 rounded-md border border-[rgba(0,153,0,0.5)] backdrop-blur-sm"
                style={{
                  boxShadow: '0 0 8px rgba(0, 153, 0, 0.35), 0 0 16px rgba(0, 153, 0, 0.15)',
                }}
              >
                <div className="text-xs font-semibold tracking-wide">Telecom</div>
              </div>
            </motion.div>
          )}

          {completedSystems.has('government') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute bottom-[12%] left-[42%] pointer-events-none z-10"
            >
              <div className="bg-white text-[#1e1e1e] px-3 py-1.5 rounded-md border border-white/70 backdrop-blur-sm"
                style={{
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(255, 255, 255, 0.18)',
                }}
              >
                <div className="text-xs font-semibold tracking-wide">Government</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[806px] p-[0px] m-[0px]">
        <motion.div
          className="flex flex-col gap-[24px] items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          {/* Progress Card — on-brand Brainy.om mono treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={`inline-flex flex-col gap-2.5 min-w-[260px] px-5 py-3 rounded-2xl border backdrop-blur-md transition-colors duration-500 ${
              allSystemsComplete
                ? 'bg-white/[0.06] border-white/25'
                : 'bg-white/[0.03] border-white/10'
            }`}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center gap-3 justify-between">
              <span className="flex items-center gap-2 text-[12px] font-medium tracking-[0.04em] text-white/85">
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                    allSystemsComplete ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-hidden="true"
                />
                {allSystemsComplete ? t.masterBuilder : t.buildSystems}
              </span>
              <span className="text-[12px] tabular-nums text-white/55">
                {language === 'ar'
                  ? `3/${completedSystems.size}`
                  : `${completedSystems.size}/3`}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${(completedSystems.size / 3) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{
                  transformOrigin: language === 'ar' ? 'right' : 'left'
                }}
              />
            </div>
          </motion.div>

          <h2
            id="oman-context-heading"
            className="font-['Inter',sans-serif] font-medium leading-[40px] text-[36px] text-white tracking-[0.3691px] text-center"
          >
            {t.scalingPlatforms}
          </h2>

          <p className="font-['Inter',sans-serif] font-normal leading-[29.25px] text-[16px] text-[rgba(255,255,255,0.7)] tracking-[-0.4395px] max-w-[748px] text-center">
            {t.platformsDesc}
          </p>
        </motion.div>
      </div>

      {/* Celebration toast — quiet brand-aligned variant */}
      {showCelebration && (
        <motion.div
          className="absolute bottom-[12%] left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="bg-white/[0.06] text-white px-5 py-3 rounded-2xl border border-white/15 backdrop-blur-md text-[13px] font-medium tracking-[0.02em]"
            style={{
              boxShadow: '0 0 16px rgba(255, 255, 255, 0.12), 0 8px 24px rgba(0,0,0,0.35)',
            }}
          >
            All systems online
          </div>
        </motion.div>
      )}
    </section>
  );
}
