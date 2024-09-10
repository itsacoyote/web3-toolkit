# Managing environment variables with dotenvx

[Dotenvx Documentation](https://dotenvx.com/docs)

`dotenvx` is the successor to `dotenv` and manages environment variables in a more secure manner.
Environment variables are still stored and managed in `.env` files and can still be separated for
various environments e.g. `.env.production`. The distinction is that the environment variables are
encrypted within the files.

## Encrypting environment variables

Environment variables are encrypted in `.env` files and the private encryption key is stored in a
`.env.keys` file. This allows `.env` files to be safely committed to public repositories, even
`.env` files for production! The only thing that must be safely kept private are the `dotenvx`
private keys for encryption.

To set an environment variable and encrypt it, use the `dotenvx set` command. Use the `-f` flag to
specify the environment file.

```sh
dotenvx set HELLO "production (encrypted)" -f .env.production
```

## Running commands through dotenvx

A slight modification to commands is required to use encrypted environment variables. Normally you
would run a command similar to `bun run dev` but to decrypt the environment variables for a command,
you will need to prefix the `dotenvx` command. This changes `bun run dev` to `dotenvx run -- bun run
dev`. To use a specific environment file, use the `-f` option, `dotenvx run -f .env.production --
bun run dev`.
