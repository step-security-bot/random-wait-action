// SPDX-FileCopyrightText: 2022 - 2024 Ali Sajid Imami
//
// SPDX-License-Identifier: MIT

import fc from 'fast-check'
fc.configureGlobal({
    numRuns: 100,
    interruptAfterTimeLimit: 10_000,
    verbose: true
}) // 1000 runs for all tests
