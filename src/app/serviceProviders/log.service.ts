import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  minimumLevel: LogLevel = LogLevel.INFO;
  logInfoMessage(message: string) {
    this.logMessage(LogLevel.INFO, message);
  }
  logDebugMessage(message: string) {
    this.logMessage(LogLevel.DEBUG, message);
  }
  logErrorMessage(message: string) {
    this.logMessage(LogLevel.ERROR, message);
  }
  logMessage(level: LogLevel, message: string) {
    if (level >= this.minimumLevel) {
      console.log(`Message (${LogLevel[level]}): ${message}`);
    }
  }
}
export enum LogLevel {
  DEBUG, INFO, ERROR
}
