import { useQuery } from "@tanstack/react-query";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
}

interface GitHubRepo {
  name: string;
  language: string;
  stargazers_count: number;
  updated_at: string;
}

interface GitHubData {
  publicRepos: number;
  totalCommits: number;
  topLanguages: string[];
  recentActivity: string;
}

export function useGitHub() {
  return useQuery<GitHubData>({
    queryKey: ['/api/github'],
    queryFn: async () => {
      // For now, return mock data since we don't have GitHub API setup
      // In a real implementation, this would fetch from your backend API
      // which would then call the GitHub API with proper authentication
      
      return {
        publicRepos: 12,
        totalCommits: 235,
        topLanguages: ["C++", "Python", "Dart"],
        recentActivity: "Active this week"
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  });
}
