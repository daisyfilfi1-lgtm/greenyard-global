#!/usr/bin/env python3
"""Bulk color migration: mint green system → gold/charcoal system"""
import os, re, sys

MAPPING = [
    ('#00B894', '#D4AF37'),
    ('#00A37E', '#E8D58A'),
    ('#009B7A', '#E8D58A'),
    ('#0F3D26', '#1A1A1A'),
    ('#0B2D1C', '#333333'),
    ('#E8F5F1', '#F0EDE8'),
    ('#F5F7F6', '#F0EDE8'),
    ('#EAECEB', '#E5E0D8'),
    ('#DEE2E6', '#E5E0D8'),
]

EXCLUDE_DIRS = {'node_modules', '.next', '.git', '.claude'}

def migrate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    changes = 0
    for old, new in MAPPING:
        if old in content:
            content = content.replace(old, new)
            changes += 1
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return changes
    return 0

total_files = 0
total_changes = 0
for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for name in files:
        if name.endswith(('.tsx', '.ts', '.css')):
            path = os.path.join(root, name)
            c = migrate_file(path)
            if c > 0:
                total_files += 1
                total_changes += c
                print(f'  {path}: {c} color replacements')

print(f'\nDone: {total_files} files, {total_changes} color replacements')
