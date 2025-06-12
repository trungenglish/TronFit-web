'use client'

import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Dumbbell, Apple, Flame } from 'lucide-react';

type WorkoutType = 'strength' | 'cardio' | 'hiit' | 'flexibility' | 'rest';

interface DayData {
  workout: string;
  workoutType: WorkoutType;
  meal: string;
  calories: number;
  intensity: string;
}

interface CalendarData {
  [key: string]: DayData;
}

const CALENDAR_DATA: CalendarData = {
  // December 2024
  '2024-12-25': {
    workout: 'Push Day',
    workoutType: 'strength',
    meal: 'Protein Bowl',
    calories: 520,
    intensity: 'High'
  },
  '2024-12-26': {
    workout: 'Cardio Run',
    workoutType: 'cardio',
    meal: 'Green Smoothie',
    calories: 280,
    intensity: 'Medium'
  },
  '2024-12-27': {
    workout: 'Rest Day',
    workoutType: 'rest',
    meal: 'Balanced Lunch',
    calories: 450,
    intensity: 'Rest'
  },
  '2024-12-28': {
    workout: 'Pull Day',
    workoutType: 'strength',
    meal: 'Lean Chicken',
    calories: 580,
    intensity: 'High'
  },
  '2024-12-29': {
    workout: 'HIIT Training',
    workoutType: 'hiit',
    meal: 'Post-Workout',
    calories: 320,
    intensity: 'High'
  },
  '2024-12-30': {
    workout: 'Yoga Flow',
    workoutType: 'flexibility',
    meal: 'Light Salad',
    calories: 250,
    intensity: 'Low'
  },
  '2024-12-31': {
    workout: 'Full Body',
    workoutType: 'strength',
    meal: 'Power Bowl',
    calories: 650,
    intensity: 'High'
  }
};

const WORKOUT_COLORS: Record<WorkoutType, string> = {
  strength: '#ff0844',
  cardio: '#00f5ff',
  hiit: '#8b5cf6',
  flexibility: '#10b981',
  rest: '#6b7280'
};

const WorkoutCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const formatDateKey = (day: number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, day);
    return date.toISOString().split('T')[0];
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = getDaysInMonth(currentDate);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Calendar Card */}
      <div className="relative bg-gradient-to-br from-zinc-900/95 via-zinc-800/90 to-zinc-900/95 backdrop-blur-xl rounded-3xl border border-zinc-700/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-zinc-800/50 to-zinc-700/30 border-b border-zinc-700/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                <CalendarIcon size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Workout Calendar</h3>
                <p className="text-sm text-gray-400">Plan your fitness journey</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-zinc-700/50 rounded-lg transition-colors"
              >
                <ChevronLeft size={16} className="text-gray-400" />
              </button>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-zinc-700/50 rounded-lg transition-colors"
              >
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          {/* Month/Year */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-4">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map(day => (
              <div key={day} className="p-2 text-center text-xs font-medium text-gray-400">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (!day) {
                return <div key={index} className="aspect-square" />;
              }

              const dateKey = formatDateKey(day);
              const dayData = CALENDAR_DATA[dateKey];
              const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
              const isSelected = selectedDate === dateKey;

              return (
                <div
                  key={day}
                  onClick={() => setSelectedDate(isSelected ? null : dateKey)}
                  className={`relative aspect-square p-1 rounded-lg border transition-all duration-200 cursor-pointer group ${
                    isSelected 
                      ? 'border-cyan-400 bg-cyan-500/10' 
                      : isToday
                      ? 'border-yellow-400/50 bg-yellow-500/5'
                      : 'border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/30'
                  }`}
                >
                  {/* Day Number */}
                  <div className={`text-xs font-medium ${
                    isToday ? 'text-yellow-400' : isSelected ? 'text-cyan-400' : 'text-white'
                  }`}>
                    {day}
                  </div>

                  {/* Workout/Meal Data */}
                  {dayData && (
                    <div className="absolute inset-1 top-4 flex flex-col justify-between">
                      {/* Workout Indicator */}
                      <div 
                        className="w-full h-1 rounded-full mb-1"
                        style={{ backgroundColor: WORKOUT_COLORS[dayData.workoutType as keyof typeof WORKOUT_COLORS] }}
                      />
                      
                      {/* Mini Icons */}
                      <div className="flex justify-between items-end text-[8px]">
                        <div className="flex items-center space-x-0.5">
                          <Dumbbell size={8} style={{ color: WORKOUT_COLORS[dayData.workoutType as keyof typeof WORKOUT_COLORS] }} />
                          <Apple size={8} className="text-green-400" />
                        </div>
                        <div className="text-gray-400 font-mono">
                          {dayData.calories}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Tooltip */}
                  {dayData && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      <div className="bg-zinc-800/95 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-2 shadow-xl min-w-[120px]">
                        <div className="text-xs space-y-1">
                          <div className="flex items-center space-x-1">
                            <Dumbbell size={10} style={{ color: WORKOUT_COLORS[dayData.workoutType as keyof typeof WORKOUT_COLORS] }} />
                            <span className="text-white font-medium">{dayData.workout}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Apple size={10} className="text-green-400" />
                            <span className="text-gray-300">{dayData.meal}</span>
                          </div>
                          <div className="flex items-center justify-between text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Flame size={8} />
                              <span>{dayData.calories}</span>
                            </div>
                            <span className="text-[10px]">{dayData.intensity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Selected Day Details */}
        {selectedDate && (selectedDate in CALENDAR_DATA) && (
          <div className="p-4 border-t border-zinc-700/50 bg-gradient-to-r from-zinc-800/30 to-zinc-700/20">
            <div className="space-y-3">
              <div className="text-sm font-medium text-cyan-400">
                Selected: {new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Dumbbell size={14} style={{ color: WORKOUT_COLORS[CALENDAR_DATA[selectedDate].workoutType as keyof typeof WORKOUT_COLORS] }} />
                    <span className="text-sm font-medium text-white">{CALENDAR_DATA[selectedDate].workout}</span>
                  </div>
                  <div className="text-xs text-gray-400 capitalize">
                    {CALENDAR_DATA[selectedDate].workoutType} • {CALENDAR_DATA[selectedDate].intensity}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Apple size={14} className="text-green-400" />
                    <span className="text-sm font-medium text-white">{CALENDAR_DATA[selectedDate].meal}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <Flame size={10} />
                    <span>{CALENDAR_DATA[selectedDate].calories} calories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-red-500/20 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Floating AI Badge */}
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border border-purple-400/30 shadow-lg">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-white">AI</span>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-red-500/10 rounded-3xl blur-2xl -z-10 opacity-50" />
    </div>
  );
};

export default WorkoutCalendar;