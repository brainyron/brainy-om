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
  
  // COMPLETED SYSTEM - permanent glow
  if (isCompletedSystem) {
    return (
      <div
        className={`[grid-area:${row}_/_${col}] place-self-stretch rounded-[4px] shrink-0 relative cursor-pointer overflow-visible`}
        style={{
          backgroundColor: color,
          opacity: 1,
          transform: 'scale(1.08)',
          boxShadow: isWhiteSystem 
            ? '0 0 30px 5px rgba(255, 255, 255, 0.9), 0 0 50px 10px rgba(255, 255, 255, 0.6)'
            : `0 0 30px 5px ${hexToRgba(color, 0.9)}, 0 0 50px 10px ${hexToRgba(color, 0.7)}`,
          border: isWhiteSystem ? '2px solid rgba(255, 255, 255, 1)' : `1px solid ${hexToRgba(color, 0.8)}`,
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
          opacity: 1,
          transform: 'scale(1.08)',
          boxShadow: isWhiteSystem
            ? '0 0 30px 5px rgba(255, 255, 255, 0.9), 0 0 50px 10px rgba(255, 255, 255, 0.6)'
            : `0 0 30px 5px ${hexToRgba(color, 0.9)}, 0 0 50px 10px ${hexToRgba(color, 0.7)}`,
          border: isWhiteSystem ? '2px solid rgba(255, 255, 255, 1)' : `1px solid ${hexToRgba(color, 0.8)}`,
          willChange: 'auto',
        }}
        onMouseEnter={() => onHover(row, col)}
        onMouseLeave={onLeave}
      />
    );
  }
  
  // Currently hovered - CSS animations with system color
  if (isCurrentHover) {
    return (
      <div
        className={`[grid-area:${row}_/_${col}] place-self-stretch rounded-[4px] shrink-0 relative cursor-pointer overflow-visible neon-cell-active`}
        style={{
          backgroundColor: color,
          opacity: 1,
          transform: 'scale(1.08)',
          willChange: 'transform',
        }}
        onMouseEnter={() => onHover(row, col)}
        onMouseLeave={onLeave}
      >
        {/* Static glow layers */}
        <div
          className="absolute inset-[-4px] rounded-[8px] pointer-events-none"
          style={{
            boxShadow: isWhiteSystem
              ? '0 0 30px 5px rgba(255, 255, 255, 0.9), 0 0 50px 10px rgba(255, 255, 255, 0.6)'
              : `0 0 30px 5px ${hexToRgba(color, 0.9)}, 0 0 50px 10px ${hexToRgba(color, 0.7)}`,
          }}
        />
        <div
          className="absolute inset-0 rounded-[4px] pointer-events-none"
          style={{
            border: isWhiteSystem ? '2px solid rgba(255, 255, 255, 1)' : `1px solid ${hexToRgba(color, 0.8)}`,
            boxShadow: isWhiteSystem
              ? 'inset 0 0 20px rgba(255, 255, 255, 0.8)'
              : `inset 0 0 20px ${hexToRgba(color, 0.6)}`,
          }}
        />
        {/* CSS animated shimmer */}
        <div 
          className="absolute inset-0 rounded-[4px] pointer-events-none overflow-hidden neon-shimmer"
          style={{
            background: 'linear-gradient(120deg, transparent 0%, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%, transparent 100%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>
    );
  }
  
  // Default state with neighbor glow
  return (
    <div
      className={`[grid-area:${row}_/_${col}] place-self-stretch rounded-[4px] shrink-0 relative cursor-pointer overflow-visible transition-all duration-150`}
      style={{
        backgroundColor: '#2c2c2c',
        opacity: baseOpacity,
        boxShadow: neighborGlow > 0 ? `0 0 ${20 * neighborGlow}px ${systemColor ? hexToRgba(systemColor, neighborGlow * 0.7) : `rgba(0, 150, 137, ${neighborGlow * 0.7})`}` : 'none',
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
  const cellTimersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  
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
    return () => {
      // Clear all timers on unmount
      cellTimersRef.current.forEach(timer => clearTimeout(timer));
      cellTimersRef.current.clear();
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
      <style>{`
        @keyframes neon-shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        .neon-shimmer {
          animation: neon-shimmer 1s linear infinite;
        }
      `}</style>
      
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
              <div className="bg-[#C41E3A] text-white px-3 py-1.5 rounded-md shadow-lg border border-[rgba(196,30,58,0.8)]"
                style={{
                  boxShadow: '0 0 20px rgba(196, 30, 58, 0.8), 0 0 40px rgba(196, 30, 58, 0.4)',
                }}
              >
                <div className="text-xs font-semibold">✓ Banking</div>
              </div>
            </motion.div>
          )}
          
          {completedSystems.has('telecom') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute top-[8%] right-[12%] pointer-events-none z-10"
            >
              <div className="bg-[#009900] text-white px-3 py-1.5 rounded-md shadow-lg border border-[rgba(0,153,0,0.8)]"
                style={{
                  boxShadow: '0 0 20px rgba(0, 153, 0, 0.8), 0 0 40px rgba(0, 153, 0, 0.4)',
                }}
              >
                <div className="text-xs font-semibold">✓ Telecom</div>
              </div>
            </motion.div>
          )}
          
          {completedSystems.has('government') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute bottom-[12%] left-[42%] pointer-events-none z-10"
            >
              <div className="bg-white text-[#1e1e1e] px-3 py-1.5 rounded-md shadow-lg border-2 border-white"
                style={{
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(255, 255, 255, 0.5)',
                }}
              >
                <div className="text-xs font-semibold">✓ Government</div>
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
          {/* Interactive Game Progress Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              boxShadow: allSystemsComplete 
                ? ['0 0 20px rgba(255, 215, 0, 0.6)', '0 0 30px rgba(255, 215, 0, 0.8)', '0 0 20px rgba(255, 215, 0, 0.6)']
                : '0 0 0px rgba(0,0,0,0)'
            }}
            transition={{ 
              delay: 0.8, 
              duration: 0.5,
              boxShadow: {
                repeat: allSystemsComplete ? Infinity : 0,
                duration: 2
              }
            }}
            className={`inline-flex flex-col gap-2 px-5 py-3 rounded-xl transition-all duration-500 ${
              allSystemsComplete 
                ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-2 border-[#FFD700]' 
                : 'bg-[rgba(0,150,137,0.15)] border border-[rgba(0,150,137,0.3)]'
            }`}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center gap-2 justify-between">
              <span className={`text-sm font-medium transition-colors duration-500 ${
                allSystemsComplete ? 'text-[#1e1e1e]' : 'text-[#009689]'
              }`}>
                {allSystemsComplete 
                  ? `🏆 ${t.masterBuilder}` 
                  : `⚡ ${t.buildSystems}`}
              </span>
              <span className={`text-xs transition-colors duration-500 ${
                allSystemsComplete ? 'text-[#1e1e1e]' : 'text-[rgba(255,255,255,0.5)]'
              }`}>
                {language === 'ar' 
                  ? `3/${completedSystems.size}` 
                  : `${completedSystems.size}/3`}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full transition-colors duration-500 ${
                  allSystemsComplete 
                    ? 'bg-[#1e1e1e]' 
                    : 'bg-[#009689]'
                }`}
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
      
      {/* Celebration Animation */}
      {showCelebration && (
        <motion.div
          className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-[#00d4aa] to-[#009689] text-white px-8 py-4 rounded-2xl shadow-2xl border-2 border-[#00d4aa]"
            style={{
              boxShadow: '0 0 40px rgba(0, 212, 170, 0.9), 0 0 80px rgba(0, 150, 137, 0.6), 0 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            <div className="text-2xl font-bold tracking-wide">🎉 All Systems Complete! 🎉</div>
          </div>
        </motion.div>
      )}
    </section>
  );
}